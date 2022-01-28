import test from 'ava'
import { TzktAPI } from '../src/index.js'

test('get accounts', async function(t) {
  const api = new TzktAPI({ baseUrl: 'https://api.tzkt.io' })

  const contracts = await api.accounts.accountsGet({
    type: 'contract',
    limit: 10
  })

  t.assert(contracts.length == 10)
}) 

