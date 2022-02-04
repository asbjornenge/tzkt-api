import type { QuoteShort } from './QuoteShort.js';
export declare type Cycle = {
    /**
     * Cycle index starting from zero
     */
    index?: number;
    /**
     * Level of the first block in the cycle
     */
    firstLevel?: number;
    /**
     * Timestamp of the first block in the cycle
     */
    startTime?: string;
    /**
     * Level of the last block in the cycle
     */
    lastLevel?: number;
    /**
     * Timestamp of the last block in the cycle
     */
    endTime?: string;
    /**
     * Index of the snapshot
     */
    snapshotIndex?: number;
    /**
     * Height of the block where the snapshot was taken
     */
    snapshotLevel?: number;
    /**
     * Randomly generated seed used by the network for things like baking rights distribution etc.
     */
    randomSeed?: string | null;
    /**
     * Total number of all active in this cycle bakers
     */
    totalBakers?: number;
    /**
     * Total number of rolls involved in baking rights distribution
     */
    totalRolls?: number;
    /**
     * Total staking balance of all active in this cycle bakers
     */
    totalStaking?: number;
    /**
     * Total number of active bakers' delegators
     */
    totalDelegators?: number;
    /**
     * Total balance delegated to active bakers
     */
    totalDelegated?: number;
    /**
     * Injected historical quote at the end of the cycle
     */
    quote?: QuoteShort | null;
};
