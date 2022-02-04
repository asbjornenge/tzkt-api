export declare type State = {
    /**
     * Alias name of the chain (or "private" if it's not on the list of known chains)
     */
    chain?: string | null;
    /**
     * Unique identificator of the chain
     */
    chainId?: string | null;
    /**
     * Current cycle
     */
    cycle?: number;
    /**
     * The height of the last block from the genesis block
     */
    level?: number;
    /**
     * Block hash
     */
    hash?: string | null;
    /**
     * Current protocol hash
     */
    protocol?: string | null;
    /**
     * Next block protocol hash
     */
    nextProtocol?: string | null;
    /**
     * The datetime at which the last block is claimed to have been created (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * Current voring epoch index, starting from zero
     */
    votingEpoch?: number;
    /**
     * Current voting period index, starting from zero
     */
    votingPeriod?: number;
    /**
     * The height of the last known block from the genesis block
     */
    knownLevel?: number;
    /**
     * The datetime of last TzKT indexer synchronization (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    lastSync?: string;
    /**
     * State of TzKT indexer synchronization
     */
    synced?: boolean;
    /**
     * The height of the block where quotes were updated last time
     */
    quoteLevel?: number;
    /**
     * Last known XTZ/BTC price
     */
    quoteBtc?: number;
    /**
     * Last known XTZ/EUR price
     */
    quoteEur?: number;
    /**
     * Last known XTZ/USD price
     */
    quoteUsd?: number;
    /**
     * Last known XTZ/CNY price
     */
    quoteCny?: number;
    /**
     * Last known XTZ/JPY price
     */
    quoteJpy?: number;
    /**
     * Last known XTZ/KRW price
     */
    quoteKrw?: number;
    /**
     * Last known XTZ/ETH price
     */
    quoteEth?: number;
    /**
     * Last known XTZ/GBP price
     */
    quoteGbp?: number;
};
