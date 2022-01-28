export const EventType = {
    Init: 0,
    Data: 1,
    Reorg: 2
}

export const CHANNELS = {
  HEAD: 'head',
  BLOCKS: 'blocks',
  BIGMAPS: 'bigmaps',
  ACCOUNTS: 'accounts',
  OPERATIONS: 'operations'
}

export const METHOD = {
  head: 'SubscribeToHead',
  blocks: 'SubscribeToBlocks',
  bigmaps: 'SubscribeToBigMaps',
  accounts: 'SubscribeToAccounts',
  operations: 'SubscribeToOperations',
}

export function channelToMethod(channel) {
  if (!METHOD[channel]) throw new Error(`Unknown channel: ${channel}`)
  return METHOD[channel] 
}
