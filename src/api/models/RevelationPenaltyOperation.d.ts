import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type RevelationPenaltyOperation = (Operation & {
    /**
     * Type of the operation, `revelation_penalty` - is operation, in which rewards were lost due to unrevealed seed nonces by the delegate (synthetic type)
     */
    type?: string | null;
    /**
     * Unique ID of the operation, stored in the TzKT indexer database
     */
    id?: number;
    /**
     * The height of the block from the genesis block, in which the operation was included
     */
    level?: number;
    /**
     * Datetime of the block, in which the operation was included (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * Hash of the block, in which the operation was included
     */
    block?: string | null;
    /**
     * Information about the delegate (baker) who has lost rewards due to unrevealed seed nonces
     */
    baker?: Alias | null;
    /**
     * Height of the block, which contains hash of the seed nonce, which was to be revealed
     */
    missedLevel?: number;
    /**
     * Reward for baking the block, which was lost due to unrevealed seed nonces (micro tez)
     */
    lostReward?: number;
    /**
     * Lost due to unrevealed seed nonce total fee paid by all operations, included in the block, which was to be revealed (micro tez)
     */
    lostFees?: number;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
