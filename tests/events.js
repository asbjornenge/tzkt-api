import assert from 'assert'
import { TzktEvents } from '../src/index.js'
import { DeferredPromise } from './utils.js'

describe('events', function() {

  it('can subscribe to head', async function() {
    console.log('starting head')
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
    console.log('finished head')
  })

  it('can subscribe to blocks', async function() {
    console.log('starting blocks')
    this.timeout(60000)
    const events = new TzktEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
    await events.start()
    const resolver = new DeferredPromise()
    events.on('blocks', async (blocks) => {
      try {
        assert(blocks.length > 0)
        await events.stop()
        resolver.resolve()
      } catch(e) {
        await events.stop()
        resolver.reject(e)
      }
    })
    await events.listen('blocks')
    await resolver
  })

})
