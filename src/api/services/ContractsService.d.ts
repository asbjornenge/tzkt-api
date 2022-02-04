/// <reference types="node" />
import type { AccountParameter } from '../models/AccountParameter.js';
import type { BigMap } from '../models/BigMap.js';
import type { BigMapKey } from '../models/BigMapKey.js';
import type { BigMapKeyHistorical } from '../models/BigMapKeyHistorical.js';
import type { BigMapKeyUpdate } from '../models/BigMapKeyUpdate.js';
import type { BigMapTagsParameter } from '../models/BigMapTagsParameter.js';
import type { Contract } from '../models/Contract.js';
import type { ContractInterface } from '../models/ContractInterface.js';
import type { ContractKindParameter } from '../models/ContractKindParameter.js';
import type { ContractView } from '../models/ContractView.js';
import type { Entrypoint } from '../models/Entrypoint.js';
import type { IMicheline } from '../models/IMicheline.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { Int64Parameter } from '../models/Int64Parameter.js';
import type { JsonParameter } from '../models/JsonParameter.js';
import type { MichelineFormat } from '../models/MichelineFormat.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { StorageRecord } from '../models/StorageRecord.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class ContractsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get contracts
     * Returns a list of contract accounts.
     * @returns Contract
     * @throws ApiError
     */
    contractsGet({ kind, creator, manager, delegate, balance, lastActivity, typeHash, codeHash, select, sort, offset, limit, includeStorage, }: {
        /** Contract kind to filter by (`delegator_contract` or `smart_contract`) **/
        kind?: ContractKindParameter | null;
        /** Filters contracts by creator. Allowed fields for `.eqx` mode: `manager`, `delegate`. **/
        creator?: AccountParameter | null;
        /** Filters contracts by manager. Allowed fields for `.eqx` mode: `creator`, `delegate`. **/
        manager?: AccountParameter | null;
        /** Filters contracts by delegate. Allowed fields for `.eqx` mode: `manager`, `creator`. **/
        delegate?: AccountParameter | null;
        /** Filters contracts by balance **/
        balance?: Int64Parameter | null;
        /** Filters contracts by last activity level (where the contract was updated) **/
        lastActivity?: Int32Parameter | null;
        /** Filters contracts by 32-bit hash of contract parameter and storage types (helpful for searching similar contracts) **/
        typeHash?: Int32Parameter | null;
        /** Filters contracts by 32-bit hash of contract code (helpful for searching same contracts) **/
        codeHash?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts contracts by specified field. Supported fields: `id` (default), `balance`, `firstActivity`, `lastActivity`, `numTransactions`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Specifies whether to include contract storage value in response. **/
        includeStorage?: boolean;
    }): CancelablePromise<Array<Contract>>;
    /**
     * Get contracts count
     * Returns a number of contract accounts.
     * @returns number
     * @throws ApiError
     */
    contractsGetCount({ kind, }: {
        /** Contract kind to filter by (`delegator_contract` or `smart_contract`) **/
        kind?: ContractKindParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get contract by address
     * Returns a contract account with the specified address.
     * @returns Contract
     * @throws ApiError
     */
    contractsGetByAddress({ address, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
    }): CancelablePromise<Contract>;
    /**
     * Get same contracts
     * Returns contracts which have the same script as the specified one.
     * Note, contract scripts are compared by 32-bit hash, so in very rare cases there may be collisions.
     * @returns Contract
     * @throws ApiError
     */
    contractsGetSame({ address, select, sort, offset, limit, includeStorage, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts contracts by specified field. Supported fields: `id` (default), `balance`, `firstActivity`, `lastActivity`, `numTransactions`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Specifies whether to include contract storage value in response. **/
        includeStorage?: boolean;
    }): CancelablePromise<Array<Contract>>;
    /**
     * Get similar contracts
     * Returns contracts which have the same interface (parameter and storage types) as the specified one.
     * Note, contract parameter and storage types are compared by 32-bit hash, so in very rare cases there may be collisions.
     * @returns Contract
     * @throws ApiError
     */
    contractsGetSimilar({ address, select, sort, offset, limit, includeStorage, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts contracts by specified field. Supported fields: `id` (default), `balance`, `firstActivity`, `lastActivity`, `numTransactions`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Specifies whether to include contract storage value in response. **/
        includeStorage?: boolean;
    }): CancelablePromise<Array<Contract>>;
    /**
     * Get contract code
     * Returns a code of the specified contract.
     * @returns binary
     * @throws ApiError
     */
    contractsGetCode({ address, level, format, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** Level at which contract code should be taken. If `0` or not specified, the current value will be returned. **/
        level?: number;
        /** Code format (`0` - micheline, `1` - michelson, `2` - bytes (base64)) **/
        format?: number;
    }): CancelablePromise<Blob>;
    /**
     * Get JSON Schema [2020-12] interface for the contract
     * Returns standard JSON Schema for contract storage, entrypoints, and Big_map entries.
     * @returns ContractInterface
     * @throws ApiError
     */
    contractsGetInterface({ address, }: {
        /** Contract address **/
        address: string | null;
    }): CancelablePromise<ContractInterface>;
    /**
     * Get contract entrypoints
     * Returns entrypoints of the specified contract.
     * @returns Entrypoint
     * @throws ApiError
     */
    contractsGetEntrypoints({ address, all, json, micheline, michelson, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** If true, returns all entrypoints, including unused ones.
         * Unused means that the entrypoint can be normalized to a more specific one.
         * For example here `(or %entry1 (unit %entry2) (nat %entry3))` the `%entry1` is unused entrypoint
         * because it can be normalized to `%entry2` or `%entry3` **/
        all?: boolean;
        /** Include parameters schema in human-readable JSON format **/
        json?: boolean;
        /** Include parameters schema in micheline format **/
        micheline?: boolean;
        /** Include parameters schema in michelson format **/
        michelson?: boolean;
    }): CancelablePromise<Array<Entrypoint>>;
    /**
     * Get entrypoint by name
     * Returns contract's entrypoint with specified name.
     * @returns Entrypoint
     * @throws ApiError
     */
    contractsGetEntrypointByName({ address, name, json, micheline, michelson, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** Entrypoint name **/
        name: string | null;
        /** Include parameters schema in human-readable JSON format **/
        json?: boolean;
        /** Include parameters schema in micheline format **/
        micheline?: boolean;
        /** Include parameters schema in michelson format **/
        michelson?: boolean;
    }): CancelablePromise<Entrypoint>;
    /**
     * Get contract views
     * Returns all views of the specified contract.
     * @returns ContractView
     * @throws ApiError
     */
    contractsGetContractViews({ address, json, micheline, michelson, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** Include parameter and return types in human-readable JSON format **/
        json?: boolean;
        /** Include parameter and return types in micheline format **/
        micheline?: boolean;
        /** Include parameter and return types in michelson format **/
        michelson?: boolean;
    }): CancelablePromise<Array<ContractView>>;
    /**
     * Get view by name
     * Returns contract view with specified name.
     * @returns ContractView
     * @throws ApiError
     */
    contractsGetContractViewByName({ address, name, json, micheline, michelson, }: {
        /** Contract address (starting with KT) **/
        address: string | null;
        /** View name **/
        name: string | null;
        /** Include parameter and return types in human-readable JSON format **/
        json?: boolean;
        /** Include parameter and return types in micheline format **/
        micheline?: boolean;
        /** Include parameter and return types in michelson format **/
        michelson?: boolean;
    }): CancelablePromise<ContractView>;
    /**
     * Build entrypoint parameters
     * Returns micheline parameters converted from its JSON representation.
     * @returns binary
     * @throws ApiError
     */
    contractsBuildEntrypointParametersGet({ address, name, value, }: {
        /** Contract address **/
        address: string | null;
        /** Entrypoint name **/
        name: string | null;
        /** Json parameters **/
        value?: string | null;
    }): CancelablePromise<Blob>;
    /**
     * Build entrypoint parameters
     * Returns micheline parameters converted from its JSON representation.
     * @returns binary
     * @throws ApiError
     */
    contractsBuildEntrypointParametersPost({ address, name, requestBody, }: {
        /** Contract address **/
        address: string | null;
        /** Entrypoint name **/
        name: string | null;
        /** Json parameters **/
        requestBody: any;
    }): CancelablePromise<Blob>;
    /**
     * Get contract storage
     * Returns contract storage value in JSON format.
     * @returns binary
     * @throws ApiError
     */
    contractsGetStorage({ address, level, path, }: {
        /** Contract address **/
        address: string | null;
        /** Level at which storage value should be taken. If `0` or not specified, the current value will be returned. **/
        level?: number;
        /** Path in the JSON value (point-separated list of field names, e.g. `path=settings.refund_time` to return **/
        path?: string | null;
    }): CancelablePromise<Blob>;
    /**
     * Get contract storage schema
     * Returns JSON schema of the contract storage.
     * @returns binary
     * @throws ApiError
     */
    contractsGetStorageSchema({ address, level, }: {
        /** Contract address **/
        address: string | null;
        /** Level at which storage schema should be taken. If `0` or not specified, the current schema will be returned. **/
        level?: number;
    }): CancelablePromise<Blob>;
    /**
     * Get contract storage history
     * Returns contract storage historical values.
     * @returns StorageRecord
     * @throws ApiError
     */
    contractsGetStorageHistory({ address, lastId, limit, }: {
        /** Contract address **/
        address: string | null;
        /** Id of the last item received (for pagination) **/
        lastId?: number;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<StorageRecord>>;
    /**
     * Get raw contract storage
     * Returns raw contract storage value in micheline format.
     * @returns IMicheline
     * @throws ApiError
     */
    contractsGetRawStorage({ address, level, }: {
        /** Contract address **/
        address: string | null;
        /** Level at which storage value should be taken. If `0` or not specified, the current value will be returned. **/
        level?: number;
    }): CancelablePromise<IMicheline>;
    /**
     * Get raw contract storage schema
     * Returns micheline schema (type) of the contract storage.
     * @returns IMicheline
     * @throws ApiError
     */
    contractsGetRawStorageSchema({ address, level, }: {
        /** Contract address **/
        address: string | null;
        /** Level at which storage schema should be taken. If `0` or not specified, the current schema will be returned. **/
        level?: number;
    }): CancelablePromise<IMicheline>;
    /**
     * Get raw contract storage history
     * Returns raw contract storage historical values.
     * @returns StorageRecord
     * @throws ApiError
     */
    contractsGetRawStorageHistory({ address, lastId, limit, }: {
        /** Contract address **/
        address: string | null;
        /** Id of the last item received (for pagination) **/
        lastId?: number;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<StorageRecord>>;
    /**
     * Get contract bigmaps
     * Returns all active bigmaps allocated in the contract storage.
     * @returns BigMap
     * @throws ApiError
     */
    contractsGetBigMaps({ address, tags, select, sort, offset, limit, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Filters bigmaps tags (`token_metadata` - tzip-12, `metadata` - tzip-16). **/
        tags?: BigMapTagsParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object.
         * If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts bigmaps by specified field. Supported fields: `id` (default), `firstLevel`, `lastLevel`, `totalKeys`, `activeKeys`, `updates`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMap>>;
    /**
     * Get bigmap by name
     * Returns contract bigmap with the specified name or storage path.
     * @returns BigMap
     * @throws ApiError
     */
    contractsGetBigMapByName({ address, name, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Bigmap name is the last piece of the bigmap storage path.
         * For example, if the storage path is `ledger` or `assets.ledger`, then the name is `ledger`.
         * If there are multiple bigmaps with the same name, for example `assets.ledger` and `tokens.ledger`, you can specify the full path. **/
        name: string | null;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<BigMap>;
    /**
     * Get bigmap keys
     * Returns keys of a contract bigmap with the specified name.
     * @returns BigMapKey
     * @throws ApiError
     */
    contractsGetBigMapByNameKeys({ address, name, active, key, value, lastLevel, select, sort, offset, limit, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Bigmap name is the last piece of the bigmap storage path.
         * For example, if the storage path is `ledger` or `assets.ledger`, then the name is `ledger`.
         * If there are multiple bigmaps with the same name, for example `assets.ledger` and `tokens.ledger`, you can specify the full path. **/
        name: string | null;
        /** Filters keys by status: `true` - active, `false` - removed. **/
        active?: boolean | null;
        /** Filters keys by JSON key. Note, this query parameter supports the following format: `?key{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?key.token_id=...`. **/
        key?: JsonParameter | null;
        /** Filters keys by JSON value. Note, this query parameter supports the following format: `?value{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?value.balance.gt=...`. **/
        value?: JsonParameter | null;
        /** Filters bigmap keys by the last update level. **/
        lastLevel?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts bigmap keys by specified field. Supported fields: `id` (default), `firstLevel`, `lastLevel`, `updates`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapKey>>;
    /**
     * Get bigmap key
     * Returns the specified bigmap key.
     * @returns BigMapKey
     * @throws ApiError
     */
    contractsGetKey({ address, name, key, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Bigmap name is the last piece of the bigmap storage path.
         * For example, if the storage path is `ledger` or `assets.ledger`, then the name is `ledger`.
         * If there are multiple bigmaps with the same name, for example `assets.ledger` and `tokens.ledger`, you can specify the full path. **/
        name: string | null;
        /** Either a key hash (`expr123...`) or a plain value (`abcde...`).
         * Even if the key is complex (an object or an array), you can specify it as is, for example, `/keys/{"address":"tz123","nat":"123"}`. **/
        key: string | null;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<BigMapKey>;
    /**
     * Get bigmap key updates
     * Returns updates history for the specified bigmap key.
     * @returns BigMapKeyUpdate
     * @throws ApiError
     */
    contractsGetKeyUpdates({ address, name, key, sort, offset, limit, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Bigmap name is the last piece of the bigmap storage path.
         * For example, if the storage path is `ledger` or `assets.ledger`, then the name is `ledger`.
         * If there are multiple bigmaps with the same name, for example `assets.ledger` and `tokens.ledger`, you can specify the full path. **/
        name: string | null;
        /** Either a key hash (`expr123...`) or a plain value (`abcde...`).
         * Even if the key is complex (an object or an array), you can specify it as is, for example, `/keys/{"address":"tz123","nat":"123"}`. **/
        key: string | null;
        /** Sorts bigmap updates by specified field. Supported fields: `id` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the key value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapKeyUpdate>>;
    /**
     * Get historical keys
     * Returns a list of bigmap keys at the specific block.
     * @returns BigMapKeyHistorical
     * @throws ApiError
     */
    contractsGetHistoricalKeys({ address, name, level, active, key, value, select, sort, offset, limit, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Bigmap name is the last piece of the bigmap storage path.
         * For example, if the storage path is `ledger` or `assets.ledger`, then the name is `ledger`.
         * If there are multiple bigmaps with the same name, for example `assets.ledger` and `tokens.ledger`, you can specify the full path. **/
        name: string | null;
        /** Level of the block at which you want to get bigmap keys **/
        level: number;
        /** Filters keys by status: `true` - active, `false` - removed. **/
        active?: boolean | null;
        /** Filters keys by JSON key. Note, this query parameter supports the following format: `?key{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?key.token_id=...`. **/
        key?: JsonParameter | null;
        /** Filters keys by JSON value. Note, this query parameter supports the following format: `?value{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?value.balance.gt=...`. **/
        value?: JsonParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts bigmap keys by specified field. Supported fields: `id` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapKeyHistorical>>;
    /**
     * Get historical key
     * Returns the specified bigmap key at the specific block.
     * @returns BigMapKeyHistorical
     * @throws ApiError
     */
    contractsGetKey2({ address, name, level, key, micheline, }: {
        /** Contract address **/
        address: string | null;
        /** Bigmap name is the last piece of the bigmap storage path.
         * For example, if the storage path is `ledger` or `assets.ledger`, then the name is `ledger`.
         * If there are multiple bigmaps with the same name, for example `assets.ledger` and `tokens.ledger`, you can specify the full path. **/
        name: string | null;
        /** Level of the block at which you want to get bigmap key **/
        level: number;
        /** Either a key hash (`expr123...`) or a plain value (`abcde...`).
         * Even if the key is complex (an object or an array), you can specify it as is, for example, `/keys/{"address":"tz123","nat":"123"}`. **/
        key: string | null;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<BigMapKeyHistorical>;
}
