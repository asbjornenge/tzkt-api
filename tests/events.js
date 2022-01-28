//import { TzktAPI, TzktEvents } from '../src/index.js'
//
//const api = new TzktAPI({ baseUrl: 'https://api.tzkt.io' })
//
//const contracts = await api.accounts.accountsGet({
//  type: 'contract',
//  limit: 10
//})
//
//// TODO: Asserts we get some contracts... console.log(contracts)
//
//const events = new TzktEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
//await events.start()
//const onHeadFull = (h) => { console.log(h) } 
//const onHeadHash = (h) => { console.log(h.data.hash) } 
//events.on('head', onHeadFull)
//events.on('head', onHeadHash)
//await events.listen('head')
//events.off('head', onHeadFull)
//events.on('operations', (opr) => { console.log(opr) })
//events.listen('operations', { type: 'transaction' })
////events.off('head', onHead)
////events.stop()
