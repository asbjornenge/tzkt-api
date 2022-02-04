import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type ActivationOperation = (Operation & {
    /**
     * Type of the operation, `activation` - is used to activate accounts that were recommended allocations of
     * tezos tokens for donations to the Tezos Foundation’s fundraiser.
     */
    type?: string | null;
    /**
     * Unique ID of the operation, stored in the TzKT indexer database
     */
    id?: number;
    /**
     * The height of the block, from the genesis block, in which the operation was included
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
     * Information about activated account
     */
    account?: Alias | null;
    /**
     * Account activation balance of tezos tokens that were recommended allocations for donations to the Tezos Foundation’s fundraiser
     */
    balance?: number;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
