import * as signalR from "@microsoft/signalr";
import {
    EventsConfig,
    Message,
    OperationTypes,
    OperationParameters,
    BigMapParameters,
    Params,
    ResponseTypes,
    CHANNEL,
    channelToMethod,
    paramsMatch,
    EventType,
    Event
} from './types';
import Observable from "zen-observable";
import { State, Block, BigMapUpdate } from '@dipdup/tzkt-api';

export class EventsService {
    private connection: signalR.HubConnection;
    private subscriptions: Set<Subscription<any>>;
    private networkEvents: Observable<Event>;
    private statusChanges: Observable<signalR.HubConnectionState>;
    private eventObservers: Set<ZenObservable.Observer<Event>>;
    private statusObservers: Set<ZenObservable.Observer<signalR.HubConnectionState>>

    constructor({ url, reconnect = true }: EventsConfig) {
        this.subscriptions = new Set<Subscription<any>>();
        this.eventObservers = new Set<ZenObservable.Observer<Event>>();
        this.statusObservers = new Set<ZenObservable.Observer<signalR.HubConnectionState>>();

        let builder = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Error)
            .withUrl(url);

        if (reconnect) {
            builder = builder.withAutomaticReconnect({
                nextRetryDelayInMilliseconds: ctx => {
                    // TODO: better policy
                    return ctx.elapsedMilliseconds < 10000 ? 1000 : 5000;
                }
            });
        }

        this.connection = builder.build();

        this.connection.on(CHANNEL.HEAD, msg => this.onMessage(CHANNEL.HEAD, msg));
        this.connection.on(CHANNEL.BLOCKS, msg => this.onMessage(CHANNEL.BLOCKS, msg));
        this.connection.on(CHANNEL.OPERATIONS, msg => this.onMessage(CHANNEL.OPERATIONS, msg));
        this.connection.on(CHANNEL.BIGMAPS, msg => this.onMessage(CHANNEL.BIGMAPS, msg));

        this.connection.onclose(() => this.onStatusChanged(signalR.HubConnectionState.Disconnected));
        this.connection.onreconnecting(() => this.onStatusChanged(signalR.HubConnectionState.Reconnecting));

        if (reconnect) {
            this.connection.onreconnected(async () => {
                this.onStatusChanged(signalR.HubConnectionState.Connected);
                this.subscriptions.forEach(async sub => await this.connection.invoke(sub.method), this);
            })
        } else {
            this.connection.onreconnected(() => this.onStatusChanged(signalR.HubConnectionState.Connected));
        }

        this.networkEvents = new Observable<Event>(observer => {
            this.eventObservers.add(observer);
            return () => {
                this.eventObservers.delete(observer);
            }
        });

        this.statusChanges = new Observable<signalR.HubConnectionState>(observer => {
            this.statusObservers.add(observer);
            return () => {
                this.statusObservers.delete(observer);
            }
        });
    }

    public async start(): Promise<void> {
        switch (this.connection.state) {
            case signalR.HubConnectionState.Disconnected: {
                this.onStatusChanged(signalR.HubConnectionState.Connecting);
                await this.connection.start();
                this.onStatusChanged(signalR.HubConnectionState.Connected);
                break;
            }
            case signalR.HubConnectionState.Connected: break;
            default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`);
        }
    }

    public async stop() {
        switch (this.connection.state) {
            case signalR.HubConnectionState.Disconnected: break;
            case signalR.HubConnectionState.Connected: {
                this.onStatusChanged(signalR.HubConnectionState.Disconnecting);
                await this.connection.stop();
                this.subscriptions.forEach(sub => {
                    if (sub.observer.complete) {
                        sub.observer.complete();
                    }
                }, this);
                this.subscriptions.clear();
                break;
            }
            default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`);
        }
    }

    /**
     * Subscribe to connection status changes
     */
    public status(): Observable<signalR.HubConnectionState> {
        return this.statusChanges;
    }

    /**
     * Subscribe to raw TzKT events (init, rollback message types)
     */
    public events(): Observable<Event> {
        return this.networkEvents;
    }

    /*
     * head
     */
    public head(): Observable<SubscriptionMessage<State>> {
        return new Observable<SubscriptionMessage<State>>(observer => {
            return this.createSubscription<State>(CHANNEL.HEAD, observer);
        })
    }

    /*
     * blocks
     */
    public blocks(): Observable<SubscriptionMessage<Block>> {
        return new Observable<SubscriptionMessage<Block>>(observer => {
            return this.createSubscription<Block>(CHANNEL.BLOCKS, observer);
        })
    }

    /*
     * operations
     */
    public operations(params?: OperationParameters): Observable<SubscriptionMessage<OperationTypes>> {
        return new Observable<SubscriptionMessage<OperationTypes>>(observer => {
            return this.createSubscription<OperationTypes>(CHANNEL.OPERATIONS, observer, params);
        })
    }

    /*
     * bigmaps
     */
    public bigmaps(params?: BigMapParameters): Observable<SubscriptionMessage<BigMapUpdate>> {
        return new Observable<SubscriptionMessage<BigMapUpdate>>(observer => {
            return this.createSubscription<BigMapUpdate>(CHANNEL.BIGMAPS, observer, params);
        })
    }

    private createSubscription<Type>(channel: CHANNEL, observer: ZenObservable.Observer<SubscriptionMessage<Type>>, params?: Params): () => void {
        const subscription = new Subscription<Type>(channel, observer, params);
        this.subscriptions.add(subscription);

        this.start()
            .then(() => this.connection.invoke(subscription.method))
            .catch(error => { throw new Error(error) });

        return () => {
            this.subscriptions.delete(subscription);
            if (subscription.observer.complete) {
                subscription.observer.complete();
            }
        }
    }

    private handle(channel: CHANNEL, items: Array<ResponseTypes>, state: number) {
        items.forEach(item => {
            this.subscriptions.forEach(sub => {
                if (sub.observer.next && sub.matches(channel, item)) {
                    sub.observer.next({
                        data: item,
                        state: state
                    });
                }
            })
        }, this);
    }

    private onMessage(channel: CHANNEL, message: Message) {
        switch (message.type) {
            case EventType.Init: {
                this.onEvent(message);
                break;
            }
            case EventType.Data: {
                this.handle(channel, [message.data as State], message.state);
                break;
            }
            case EventType.Reorg: {
                this.onEvent(message);
                break;
            }
        }
    }

    private onEvent(event: Event) {
        this.eventObservers.forEach(o => {
            if (o.next) {
                o.next(event);
            }
        });
    }

    private onStatusChanged(status: signalR.HubConnectionState) {
        this.statusObservers.forEach(o => {
            if (o.next) {
                o.next(status);
            }
        });
    }
}

export interface SubscriptionMessage<Type> {
    data: Type | null,
    state: number
}

class Subscription<Type> {
    private channel: string;
    private params?: Params;

    observer: ZenObservable.Observer<SubscriptionMessage<Type>>;
    method: string;

    constructor(channel: CHANNEL, observer: ZenObservable.Observer<SubscriptionMessage<Type>>, params?: Params) {
        this.channel = channel
        this.method = channelToMethod(channel);
        this.params = params;
        this.observer = observer;
    }

    public matches(channel: CHANNEL, item: ResponseTypes): boolean {
        if (this.channel !== channel) {
            return false;
        }

        if (this.params) {
            if (!paramsMatch(this.params, item)) {
                return false;
            }
        }

        return true;
    }
}
