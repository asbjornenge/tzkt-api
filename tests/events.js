import test from 'ava'
import { TzKTEvents } from '../src/index.js'
import { DeferredPromise } from '../testUtils.js'

test('subscribe to head', async function(t) {
  const events = new TzKTEvents({ BASE: 'https://api.tzkt.io/v1/events' })
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
  const events = new TzKTEvents({ BASE: 'https://api.tzkt.io/v1/events' })
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

//test('subscribe to account', async function(t) {
//  const events = new TzKTEvents({ BASE: 'https://api.tzkt.io/v1/events' })
//  await events.start()
//  const resolver = new DeferredPromise()
//  events.on('accounts', async (account) => {
//    console.log(account)
//    try {
//      t.assert(false)
//      await events.stop()
//      resolver.resolve()
//    } catch(e) {
//      await events.stop()
//      resolver.reject(e)
//    }
//  })
//  await events.listen('accounts', { addresses: [
//    'KT1FvqJwEDWb1Gwc55Jd1jjTHRVWbYKUUpyq'
//  ] })
//  await resolver
//})

test('subscribe to operations', async function(t) {
  const events = new TzKTEvents({ BASE: 'https://api.tzkt.io/v1/events' })
  await events.start()
  const resolver = new DeferredPromise()
  events.on('operations', async (operations) => {
    try {
      t.assert(operations.length > 0)
      t.assert(operations[0].type == 'transaction')
      await events.stop()
      resolver.resolve()
    } catch(e) {
      await events.stop()
      resolver.reject(e)
    }
  })
  await events.listen('operations', { address: 'KT1FvqJwEDWb1Gwc55Jd1jjTHRVWbYKUUpyq', types: 'transaction' })
  await resolver
})

test('subscribe to bigmap', async function(t) {
  const events = new TzKTEvents({ BASE: 'https://api.tzkt.io/v1/events' })
  await events.start()
  const resolver = new DeferredPromise()
  events.on('bigmaps', async (bigmapUpdates) => {
    try {
      t.assert(bigmapUpdates.length > 0)
      t.assert(bigmapUpdates[0].path == 'asks')
      await events.stop()
      resolver.resolve()
    } catch(e) {
      await events.stop()
      resolver.reject(e)
    }
  })
  await events.listen('bigmaps', { contract: 'KT1FvqJwEDWb1Gwc55Jd1jjTHRVWbYKUUpyq', path: 'asks' })
  await resolver
})
