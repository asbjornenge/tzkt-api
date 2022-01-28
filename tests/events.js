import assert from 'assert'
import { TzktEvents } from '../src/index.js'
import { DeferredPromise } from './utils.js'

describe('events', function() {
  
  it('subscribe to head', async function() {
    this.timeout(60000)
    const events = new TzktEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
    await events.start()
    const resolver = new DeferredPromise()
    events.on('head', async (head) => {
      try {
        assert(head.hash != undefined)
        await events.stop()
        resolver.resolve()
      } catch(e) {
        await events.stop()
        resolver.reject(e)
      }
    })
    await events.listen('head')
    await resolver
  })

})

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
