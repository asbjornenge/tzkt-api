import test from 'ava'
import { TzktEvents } from '../src/index.js'
import { DeferredPromise } from './utils.js'

test('subscribe to head', async function(t) {
  const events = new TzktEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
  await events.start()
  const resolver = new DeferredPromise()
  events.on('head', async (head) => {
    try {
      t.assert(head.hash != undefined)
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

test('subscribe to blocks', async function(t) {
  const events = new TzktEvents({ baseUrl: 'https://api.tzkt.io/v1/events' })
  await events.start()
  const resolver = new DeferredPromise()
  events.on('blocks', async (blocks) => {
    try {
      t.assert(blocks.length > 0)
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

