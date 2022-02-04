import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type NonceRevelationOperation = (Operation & {
    /**
     * Type of the operation, `nonce_revelation` - are used by the blockchain to create randomness
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
     * Information about the delegate (baker), who produced the block with the operation
     */
    baker?: Alias | null;
    /**
     * Reward amount paid to baker, included this operation into a block
     */
    bakerRewards?: number;
    /**
     * Information about the delegate (baker), who revealed the nonce (sent the operation)
     */
    sender?: Alias | null;
    /**
     * Block height of the block, where seed nonce hash is stored
     */
    revealedLevel?: number;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
