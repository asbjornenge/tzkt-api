import type { QuoteShort } from './QuoteShort.js';
export declare type Statistics = {
    /**
     * Cycle at the end of which the statistics has been calculated. This field is only present in cyclic statistics.
     */
    cycle?: number | null;
    /**
     * Day at the end of which the statistics has been calculated. This field is only present in daily statistics.
     */
    date?: string | null;
    /**
     * Level of the block at which the statistics has been calculated
     */
    level?: number;
    /**
     * Timestamp of the block at which the statistics has been calculated (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * Total supply - all existing tokens (including locked vested funds and frozen funds) plus not yet activated fundraiser tokens
     */
    totalSupply?: number;
    /**
     * Circulating supply - all active tokens which can affect supply and demand (can be spent/transferred)
     */
    circulatingSupply?: number;
    /**
     * Total amount of tokens initially created when starting the blockchain
     */
    totalBootstrapped?: number;
    /**
     * Total commitment amount (tokens to be activated by fundraisers)
     */
    totalCommitments?: number;
    /**
     * Total amount of tokens activated by fundraisers
     */
    totalActivated?: number;
    /**
     * Total amount of created/issued tokens
     */
    totalCreated?: number;
    /**
     * Total amount of burned tokens
     */
    totalBurned?: number;
    /**
     * Total amount of tokens sent to the null-address, which is equivalent to burning
     */
    totalBanished?: number;
    /**
     * Total amount of tokens locked on vested contracts
     */
    totalVested?: number;
    /**
     * Total amount of frozen tokens (frozen security deposits, frozen rewards and frozen fees)
     */
    totalFrozen?: number;
    /**
     * Injected historical quote at the time of the block at which the statistics has been calculated
     */
    quote?: QuoteShort | null;
};
