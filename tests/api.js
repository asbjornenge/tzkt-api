import assert from 'assert'
import { TzktAPI } from '../src/index.js'

describe('api', function() {

  it('can get accounts', async function() {
    const api = new TzktAPI({ baseUrl: 'https://api.tzkt.io' })

    const contracts = await api.accounts.accountsGet({
      type: 'contract',
      limit: 10
    })

    assert(contracts.length == 10)
  }) 

})
