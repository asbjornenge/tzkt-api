import type { Alias } from './Alias.js';
import type { BigMapDiff } from './BigMapDiff.js';
import type { Operation } from './Operation.js';
import type { OperationError } from './OperationError.js';
import type { OriginatedContract } from './OriginatedContract.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type OriginationOperation = (Operation & {
    /**
     * Type of the operation, `origination` - deployment / contract creation operation.
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
     * Information about the initiator of the contract call
     */
    initiator?: Alias | null;
    /**
     * Information about the account, created a contract
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
     * The amount of funds burned from the sender account for contract storage in the blockchain (micro tez)
     */
    storageFee?: number;
    /**
     * The amount of funds burned from the sender account for contract account creation (micro tez)
     */
    allocationFee?: number;
    /**
     * The contract origination balance (micro tez)
     */
    contractBalance?: number;
    /**
     * Information about the account, which was marked as a manager in the operation
     */
    contractManager?: Alias | null;
    /**
     * Information about the baker (delegate), which was marked as a delegate in the operation
     */
    contractDelegate?: Alias | null;
    /**
     * Contract code. Note: you can configure code format by setting `micheline` query parameter (`0 | 2` - raw micheline, `1 | 3` - raw micheline string).
     */
    code?: any;
    /**
     * Initial contract storage value converted to human-readable JSON. Note: you can configure storage format by setting `micheline` query parameter.
     */
    storage?: any;
    /**
     * List of bigmap updates (aka big_map_diffs) caused by the origination.
     */
    diffs?: Array<BigMapDiff> | null;
    /**
     * Operation status (`applied` - an operation applied by the node and successfully added to the blockchain,
     * `failed` - an operation which failed with some particular error (not enough balance, gas limit, etc),
     * `backtracked` - an operation which was a successful but reverted due to one of the following operations in the same operation group was failed,
     * `skipped` - all operations after the failed one in an operation group)
     */
    status?: string | null;
    /**
     * List of errors provided by the node, injected the operation to the blockchain. `null` if there is no errors
     */
    errors?: Array<OperationError> | null;
    /**
     * Information about the originated ( deployed / created ) contract
     */
    originatedContract?: OriginatedContract | null;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
