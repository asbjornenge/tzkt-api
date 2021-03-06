import * as signalR from "@microsoft/signalr";
import {
  CHANNELS,
  EventType,
  channelToMethod
} from './utils.js'

export class TzKTEvents {
  #connection;
  #dataObservers;
  #eventObservers;
  #statusObservers;

  constructor({ BASE, reconnect = true }) {
    this.#dataObservers = Object.values(CHANNELS).reduce((m,c) => { m[c] = []; return m }, {})
    this.#eventObservers = [] 
    this.#statusObservers = [] 

    let builder = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Error)
      .withUrl(BASE);

    if (reconnect) {
      builder = builder.withAutomaticReconnect({
        nextRetryDelayInMilliseconds: ctx => {
          // TODO: better policy
          return ctx.elapsedMilliseconds < 10000 ? 1000 : 5000;
        }
      })
    }

    this.connection = builder.build()

    this.connection.on(CHANNELS.HEAD, msg => this.#onMessage(CHANNELS.HEAD, msg));
    this.connection.on(CHANNELS.BLOCKS, msg => this.#onMessage(CHANNELS.BLOCKS, msg));
    this.connection.on(CHANNELS.OPERATIONS, msg => this.#onMessage(CHANNELS.OPERATIONS, msg));
    this.connection.on(CHANNELS.BIGMAPS, msg => this.#onMessage(CHANNELS.BIGMAPS, msg));

    this.connection.onclose(() => this.#onStatusChanged(signalR.HubConnectionState.Disconnected));
    this.connection.onreconnecting(() => this.#onStatusChanged(signalR.HubConnectionState.Reconnecting));

    if (reconnect) {
      this.connection.onreconnected(async () => {
        this.#onStatusChanged(signalR.HubConnectionState.Connected);
      })
    } else {
      this.connection.onreconnected(() => this.#onStatusChanged(signalR.HubConnectionState.Connected));
    }
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

  async stop() {
    switch (this.connection.state) {
      case signalR.HubConnectionState.Disconnected: break;
      case signalR.HubConnectionState.Connected: {
        this.#onStatusChanged(signalR.HubConnectionState.Disconnecting);
        await this.connection.stop();
        break;
      }
      default: throw new Error(`Intermediate connection hub state: ${this.connection.state}`);
    }
  }

  on(channel, fn) {
    switch(channel) {
      case 'networkEvent':
        this.#eventObservers.push(fn)
        break
      case 'statusChange':
        this.#statusObservers.push(fn)
        break
      default:
        if (!this.#dataObservers[channel]) throw new Error(`Unsupported channel: ${channel}`)
        this.#dataObservers[channel].push(fn)
    }
  }

  off(channel, fn) {
    switch(channel) {
      case 'networkEvent':
        this.#eventObservers = this.#eventObservers.filter(f => f !== fn)
        break
      case 'statusChange':
        this.#statusObservers = this.#statusObservers.filter(f => f !== fn)
        break
      default:
        if (!this.#dataObservers[channel]) throw new Error(`Unsupported channel: ${channel}`)
        this.#dataObservers[channel] = this.#dataObservers[channel].filter(f => f !== fn)
    }
  }

  async listen(channel, params) {
    let res;
    if (params)
      res = await this.connection.invoke(channelToMethod(channel), params) 
    else
      res = await this.connection.invoke(channelToMethod(channel)) 
    return res
  }

  async #onMessage(channel, message) {
    switch (message.type) {
      case EventType.Init: {
        this.#eventObservers.forEach(fn => fn(message)) 
        break;
      }
      case EventType.Data: {
        this.#dataObservers[channel].forEach(async fn => await fn(message.data)) 
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
