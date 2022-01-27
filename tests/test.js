import { TzktAPI } from '../dist/index.js'

const api = new TzktAPI({ baseUrl: 'https://api.tzkt.io' })

const contracts = await api.accounts.accountsGet({
  type: 'contract',
  limit: 10
})

console.log(contracts)
