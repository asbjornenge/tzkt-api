import * as signalR from "@microsoft/signalr";
import {
  CHANNEL,
  EventType,
  channelToMethod
} from './types.js'
import Observable from "zen-observable";
//import { State, Block, BigMapUpdate } from '@dipdup/tzkt-api';

export class TzktEvents {
  #connection;
  #subscriptions;
  #networkEvents;
  #statusChanges;
  #eventObservers;
  #statusObservers;

  constructor({ baseUrl, reconnect = true }) {
    this.#subscriptions = [] 
    this.#eventObservers = [] 
    this.#statusObservers = [] 

    let builder = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Error)
      .withUrl(baseUrl);

    if (reconnect) {
      builder = builder.withAutomaticReconnect({
        nextRetryDelayInMilliseconds: ctx => {
          // TODO: better policy
          return ctx.elapsedMilliseconds < 10000 ? 1000 : 5000;
        }
      })
    }

    this.connection = builder.build()

    this.connection.on(CHANNEL.HEAD, msg => this.#onMessage(CHANNEL.HEAD, msg));
    this.connection.on(CHANNEL.BLOCKS, msg => this.#onMessage(CHANNEL.BLOCKS, msg));
    this.connection.on(CHANNEL.OPERATIONS, msg => this.#onMessage(CHANNEL.OPERATIONS, msg));
    this.connection.on(CHANNEL.BIGMAPS, msg => this.#onMessage(CHANNEL.BIGMAPS, msg));

    this.connection.onclose(() => this.#onStatusChanged(signalR.HubConnectionState.Disconnected));
    this.connection.onreconnecting(() => this.#onStatusChanged(signalR.HubConnectionState.Reconnecting));

    if (reconnect) {
      this.connection.onreconnected(async () => {
        this.#onStatusChanged(signalR.HubConnectionState.Connected);
        this.#subscriptions.forEach(async sub => await this.connection.invoke(sub.method), this);
      })
    } else {
      this.connection.onreconnected(() => this.#onStatusChanged(signalR.HubConnectionState.Connected));
    }

    this.networkEvents = new Observable(observer => {
      this.#eventObservers.push(observer)
      return () => {
        this.#eventObservers.delete(observer)
      }
    })

    this.statusChanges = new Observable(observer => {
      this.#statusObservers.push(observer)
      return () => {
        this.#statusObservers.delete(observer)
      }
    })
  }

  async start() {
    switch (this.connection.state) {
      case signalR.HubConnectionState.Disconnected: {
        this.#onStatusChanged(signalR.HubConnectionState.Connecting)
        await this.connection.start()
        this.#onStatusChanged(signalR.HubConnectionState.Connected)
        break
      }
      case signalR.HubConnectionState.Connected: break;
      default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`)
    }
  }

//    public async stop() {
//        switch (this.connection.state) {
//            case signalR.HubConnectionState.Disconnected: break;
//            case signalR.HubConnectionState.Connected: {
//                this.onStatusChanged(signalR.HubConnectionState.Disconnecting);
//                await this.connection.stop();
//                this.subscriptions.forEach(sub => {
//                    if (sub.observer.complete) {
//                        sub.observer.complete();
//                    }
//                }, this);
//                this.subscriptions.clear();
//                break;
//            }
//            default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`);
//        }
//    }
//
//    /**
//     * Subscribe to connection status changes
//     */
//    public status(): Observable<signalR.HubConnectionState> {
//        return this.statusChanges;
//    }
//
//    /**
//     * Subscribe to raw TzKT events (init, rollback message types)
//     */
//    public events(): Observable<Event> {
//        return this.networkEvents;
//    }
//
//    /*
//     * head
//     */
//    public head(): Observable<SubscriptionMessage<State>> {
//        return new Observable<SubscriptionMessage<State>>(observer => {
//            return this.createSubscription<State>(CHANNEL.HEAD, observer);
//        })
//    }
//
//    /*
//     * blocks
//     */
//    public blocks(): Observable<SubscriptionMessage<Block>> {
//        return new Observable<SubscriptionMessage<Block>>(observer => {
//            return this.createSubscription<Block>(CHANNEL.BLOCKS, observer);
//        })
//    }
//
  /*
   * operations
   */
  operations(params) {
    return new Observable(observer => {
        return this.#createSubscription(CHANNEL.OPERATIONS, observer, params)
    })
  }

//    /*
//     * bigmaps
//     */
//    public bigmaps(params?: BigMapParameters): Observable<SubscriptionMessage<BigMapUpdate>> {
//        return new Observable<SubscriptionMessage<BigMapUpdate>>(observer => {
//            return this.createSubscription<BigMapUpdate>(CHANNEL.BIGMAPS, observer, params);
//        })
//    }

    #createSubscription(channel, observer, params) {
        const subscription = new Subscription(channel, observer, params)
        this.#subscriptions.push(subscription)

        this.start()
          .then(() => this.connection.invoke(subscription.method, params))
          .catch(error => { throw new Error(error) })

        return () => {
            this.#subscriptions.delete(subscription)
            if (subscription.observer.complete) {
                subscription.observer.complete()
            }
        }
    }

  #handle(channel, items, state) {
    items.forEach(item => {
      this.#subscriptions.forEach(sub => {
        if (sub.observer.next && sub.matches(channel, item)) {
          sub.observer.next({
            data: item,
            state: state
          });
        }
      })
    }, this)
  }

  #onMessage(channel, message) {
    switch (message.type) {
      case EventType.Init: {
        this.#onEvent(message);
        break;
      }
      case EventType.Data: {
        this.#handle(channel, [message.data], message.state);
        break;
      }
      case EventType.Reorg: {
        this.#onEvent(message);
        break;
      }
    }
  }

  #onEvent(event) {
    this.#eventObservers.forEach(o => {
      if (o.next) {
        o.next(event);
      }
    })
  }

  #onStatusChanged(status) {
    this.#statusObservers.forEach(o => {
      if (o.next) {
        o.next(status);
      }
    })
  }
}

//export interface SubscriptionMessage<Type> {
//    data: Type | null,
//    state: number
//}

class Subscription {
  #channel;
  #params;
  observer;
  method;

  constructor(channel, observer, params) {
    this.#channel = channel
    this.#params = params
    this.observer = observer
    this.method = channelToMethod(channel)
  }

  matches(channel, item) {
    if (this.#channel !== channel) return false
//    if (this.#params && !paramsMatch(this.#params, item)) return false
    return true
  }
}

