import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { OperationError } from './OperationError.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type RevealOperation = (Operation & {
    /**
     * Type of the operation, `reveal` - is used to reveal the public key associated with an account
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
     * Information about the account who has sent the operation
     */
    sender?: Alias | null;
    /**
     * An account nonce which is used to prevent operation replay
     */
    counter?: number;
    /**
     * A cap on the amount of gas a given operation can consume
     */
    gasLimit?: number;
    /**
     * Amount of gas, consumed by the operation
     */
    gasUsed?: number;
    /**
     * Fee to the baker, produced block, in which the operation was included (micro tez)
     */
    bakerFee?: number;
    /**
     * Operation status (`applied` - an operation applied by the node and successfully added to the blockchain,
     * `failed` - an operation which failed with some particular error (not enough balance, gas limit, etc),
     * `backtracked` - an operation which was successful but reverted due to one of the following operations in the same operation group was failed,
     * `skipped` - all operations after the failed one in an operation group)
     */
    status?: string | null;
    /**
     * List of errors provided by the node, injected the operation to the blockchain. `null` if there is no errors
     */
    errors?: Array<OperationError> | null;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
