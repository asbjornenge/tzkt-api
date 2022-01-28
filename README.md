# TzKTAPI

TzKTApi is a Node.js module to communicate with a [tzkt API](https://api.tzkt.io/).

It uses the [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) to generate the api code from the [spec](https://api.tzkt.io/v1/swagger.json). It transpiles and modified this code to produce a module for Node.js in Javascript. It uses the module pattern.

It also exposes a wrapper around [SignalR](https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction?view=aspnetcore-6.0) to ease consumption of the available websocket methods.

## Install

```
npm i @asbjornenge/tzkt-api
```

## Use

### TzKTAPI

```js
import { TzKTAPI } from '@asbjornenge/tzkt-api'

const api = new TzKTAPI({ baseUrl: 'https://api.tzkt.io' })

const contracts = await api.accounts.accountsGet({
  type: 'contract',
  limit: 10
})

console.log(contracts)
```

### TzKTEvents

```js
import { TzKTEvents } from '@asbjornenge/tzkt-api'

const events = new TzKTEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
events.on('head', async (head) => console.log)
await events.start()
await events.listen('head')
```

## Test

```
npm test
```

enjoy. 
