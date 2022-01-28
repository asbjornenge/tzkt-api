import * as signalR from "@microsoft/signalr";
import {
  CHANNEL,
  EventType,
  channelToMethod
} from './types.js'

export class TzktEvents {
  #connection;
  #subscriptions;
  #networkEvents;
  #statusChanges;
  #dataObservers;
  #eventObservers;
  #statusObservers;

  constructor({ baseUrl, reconnect = true }) {
    this.#subscriptions = [] 
    this.#dataObservers = Object.values(CHANNEL).reduce((m,c) => { m[c] = []; return m }, {})
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
      })
    } else {
      this.connection.onreconnected(() => this.#onStatusChanged(signalR.HubConnectionState.Connected));
    }

// Add options to sub to these if you want
//
//    this.networkEvents = new Observable(observer => {
//      this.#eventObservers.push(observer)
//      return () => {
//        this.#eventObservers.delete(observer)
//      }
//    })
//
//    this.statusChanges = new Observable(observer => {
//      this.#statusObservers.push(observer)
//      return () => {
//        this.#statusObservers.delete(observer)
//      }
//    })
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

  on(channel, fn) {
    if (!this.#dataObservers[channel]) throw new Error(`Unsupported channel: ${channel}`)
    this.#dataObservers[channel].push(fn)
  }

  off(channel, fn) {
    if (!this.#dataObservers[channel]) throw new Error(`Unsupported channel: ${channel}`)
    this.#dataObservers[channel] = this.#dataObservers[channel].filter(f => f !== fn)
  }

  async listen(channel, params) {
    let res;
    if (params)
      res = await this.connection.invoke(channelToMethod(channel), params) 
    else
      res = await this.connection.invoke(channelToMethod(channel)) 
    return res
  }

  #onMessage(channel, message) {
    switch (message.type) {
      case EventType.Init: {
        this.#eventObservers.forEach(fn => fn(message)) 
        break;
      }
      case EventType.Data: {
        this.#dataObservers[channel].forEach(fn => fn(message)) 
        break;
      }
      case EventType.Reorg: {
        this.#eventObservers.forEach(fn => fn(message))
        break;
      }
    }
  }

  #onStatusChanged(status) {
    this.#statusObservers.forEach(fn => fn(status))
  }

}

class Subscription {
  channel;
  params;
  method;
  fns;

  constructor(channel, params) {
    this.channel = channel
    this.params = params
    this.method = channelToMethod(channel)
  }

  register(fn) {
    fns.push(fn)
  }

  matches(channel, item) {
    if (this.channel !== channel) return false
//    if (this.params && !paramsMatch(this.params, item)) return false
    return true
  }
}

