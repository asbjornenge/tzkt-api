import { AccountsService } from '../dist/index.js'

const accounts = new AccountsService({ baseUrl: 'https://api.tzkt.io' })

console.log(accounts)
console.log(AccountsService.accountsGet)

const contracts = await AccountsService.accountsGet({
  type: 'account',
  limit: 10
})
