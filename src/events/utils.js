export const EventType = {
    Init: 0,
    Data: 1,
    Reorg: 2
}

export const CHANNEL = {
  HEAD: 'head',
  BLOCKS: 'blocks',
  OPERATIONS: 'operations',
  BIGMAPS: 'bigmaps'
}

export const METHOD = {
  HEAD: 'SubscribeToHead',
  BLOCKS: 'SubscribeToBlocks',
  OPERATIONS: 'SubscribeToOperations',
  BIGMAPS: 'SubscribeToBigMaps'
}

export function channelToMethod(channel) {
  switch (channel) {
    case CHANNEL.HEAD: {
      return METHOD.HEAD;
    }
    case CHANNEL.BLOCKS: {
      return METHOD.BLOCKS;
    }
    case CHANNEL.OPERATIONS: {
      return METHOD.OPERATIONS;
    }
    case CHANNEL.BIGMAPS: {
      return METHOD.BIGMAPS;
    }
    default: {
      throw new Error('Unknown channel: ' + channel)
    }
  }
}
