import { TzktAPI, TzktEvents } from '../src/index.js'

const api = new TzktAPI({ baseUrl: 'https://api.tzkt.io' })

const contracts = await api.accounts.accountsGet({
  type: 'contract',
  limit: 10
})

// TODO: Asserts we get some contracts... console.log(contracts)

const events = new TzktEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
const sub = events.operations({ types: 'origination' })
  .subscribe({ next: (tx) => {
    console.log('gets here', tx)
  } })
