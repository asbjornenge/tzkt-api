import type { Alias } from './Alias.js';
import type { BigMapDiff } from './BigMapDiff.js';
import type { Operation } from './Operation.js';
import type { OperationError } from './OperationError.js';
import type { QuoteShort } from './QuoteShort.js';
import type { TxParameter } from './TxParameter.js';
export declare type TransactionOperation = (Operation & {
    /**
     * Type of the operation, `transaction` - is a standard operation used to transfer tezos tokens to an account
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
     * Information about the initiator of the transaction call
     */
    initiator?: Alias | null;
    /**
     * Information about the account sent the transaction
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
     * A cap on the amount of storage a given operation can consume
     */
    storageLimit?: number;
    /**
     * Amount of storage, consumed by the operation
     */
    storageUsed?: number;
    /**
     * Fee to the baker, produced block, in which the operation was included (micro tez)
     */
    bakerFee?: number;
    /**
     * The amount of funds burned from the sender account for used the blockchain storage (micro tez)
     */
    storageFee?: number;
    /**
     * The amount of funds burned from the sender account for account creation (micro tez)
     */
    allocationFee?: number;
    /**
     * Information about the target of the transaction
     */
    target?: Alias | null;
    /**
     * The transaction amount (micro tez)
     */
    amount?: number;
    /**
     * Transaction parameter, including called entrypoint and value passed to the entrypoint.
     */
    parameter?: TxParameter | null;
    /**
     * Contract storage after executing the transaction converted to human-readable JSON. Note: you can configure storage format by setting `micheline` query parameter.
     */
    storage?: any;
    /**
     * List of bigmap updates (aka big_map_diffs) caused by the transaction.
     */
    diffs?: Array<BigMapDiff> | null;
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
     * An indication of whether the transaction has an internal operations
     * `true` - there are internal operations
     * `false` - no internal operations
     */
    hasInternals?: boolean;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
    /**
     * **DEPRECATED**. Use `entrypoint` and `parameter` instead.
     */
    parameters?: string | null;
});
