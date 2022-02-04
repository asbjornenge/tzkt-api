import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { OperationError } from './OperationError.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type DelegationOperation = (Operation & {
    /**
     * Type of the operation, `delegation` -  is used to delegate funds to a delegate (an implicit account registered as a baker)
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
     * An account nonce which is used to prevent operation replay
     */
    counter?: number;
    /**
     * Information about the initiator of the delegation contract call
     */
    initiator?: Alias | null;
    /**
     * Information about the delegated account
     */
    sender?: Alias | null;
    /**
     * An account nonce which is used to prevent internal operation replay
     */
    nonce?: number | null;
    /**
     * A cap on the amount of gas a given operation can consume
     */
    gasLimit?: number;
    /**
     * Amount of gas, consumed by the operation
     */
    gasUsed?: number;
    /**
     * Fee to a baker, produced block, in which the operation was included
     */
    bakerFee?: number;
    /**
     * Sender's balance at the time of delegation operation (aka delegation amount).
     */
    amount?: number;
    /**
     * Information about the previous delegate of the account. `null` if there is no previous delegate
     */
    prevDelegate?: Alias | null;
    /**
     * Information about the delegate to which the operation was sent. `null` if there is no new delegate (an undelegation operation)
     */
    newDelegate?: Alias | null;
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
