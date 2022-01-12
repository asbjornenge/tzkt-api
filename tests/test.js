import { AccountsApi } from '../dist/api.js'

const accounts = new AccountsApi({ baseUrl: 'https://api.tzkt.io' })

console.log(accounts.accountsGet)

const contracts = await accounts.accountsGet({
  kind: { eq: 'smart_contract' },
  balance: { gt: 0 },
  staked: { eq: true },
  select: { fields: [ 'address', 'balance', 'delegate' ] },
  sort: { desc: 'lastActivity' },
  limit: 10
})
