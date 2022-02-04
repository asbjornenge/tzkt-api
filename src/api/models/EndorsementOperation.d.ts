import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type EndorsementOperation = (Operation & {
    /**
     * Type of the operation, `endorsement` - is operation, which specifies the head of the chain as seen by the endorser of a given slot.
     * The endorser is randomly selected to be included in the block that extends the head of the chain as specified in this operation.
     * A block with more endorsements improves the weight of the chain and increases the likelihood of that chain being the canonical one.
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
     * Hash of the operation
     */
    hash?: string | null;
    /**
     * Information about the baker (delegate) who sent the operation
     */
    delegate?: Alias | null;
    /**
     * Number of assigned endorsement slots (out of 32) to the baker (delegate) who sent the operation
     */
    slots?: number;
    /**
     * Security deposit frozen on the baker's account
     */
    deposit?: number;
    /**
     * Reward of the baker (delegate) for the operation
     */
    rewards?: number;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
