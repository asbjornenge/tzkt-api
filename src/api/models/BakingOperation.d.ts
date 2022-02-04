import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type BakingOperation = (Operation & {
    /**
     * Type of the operation, `baking` - an operation which contains brief information about a baked (produced) block (synthetic type)
     */
    type?: string | null;
    /**
     * Unique ID of the operation, stored in the TzKT indexer database
     */
    id?: number;
    /**
     * The height of the block from the genesis block
     */
    level?: number;
    /**
     * The datetime at which the block is claimed to have been created (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * Block hash
     */
    block?: string | null;
    /**
     * Information about a delegate (baker), produced the block
     */
    baker?: Alias | null;
    /**
     * The position in the priority list of delegates at which the block was baked
     */
    priority?: number;
    /**
     * Security deposit frozen on the baker's account for producing the block (micro tez)
     */
    deposit?: number;
    /**
     * Reward of the baker for producing the block (micro tez)
     */
    reward?: number;
    /**
     * Total fee paid by all operations, included in the block
     */
    fees?: number;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
