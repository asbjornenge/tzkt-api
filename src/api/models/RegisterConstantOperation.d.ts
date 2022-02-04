import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { OperationError } from './OperationError.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type RegisterConstantOperation = (Operation & {
    /**
     * Type of the operation, `register_constant` - is used to register a global
     * constant - Micheline expression that can be reused by multiple smart contracts
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
     * Operation status (`applied` - an operation applied by the node and successfully added to the blockchain,
     * `failed` - an operation which failed with some particular error (not enough balance, gas limit, etc),
     * `backtracked` - an operation which was successful but reverted due to one of the following operations in the same operation group was failed,
     * `skipped` - all operations after the failed one in an operation group)
     */
    status?: string | null;
    /**
     * Global address of the registered constant (null if the operation failed)
     */
    address?: string | null;
    /**
     * Constant value. Note: you can configure code format by setting `micheline` query parameter (`0 | 2` - raw micheline, `1 | 3` - raw micheline string).
     */
    value?: any;
    /**
     * List of errors provided by the node, injected the operation to the blockchain. `null` if there is no errors
     */
    errors?: Array<OperationError> | null;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
