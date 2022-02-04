/// <reference types="node" />
import type { Account } from '../models/Account.js';
import type { AccountMetadata } from '../models/AccountMetadata.js';
import type { AccountParameter } from '../models/AccountParameter.js';
import type { AccountTypeParameter } from '../models/AccountTypeParameter.js';
import type { BoolParameter } from '../models/BoolParameter.js';
import type { ContractKindParameter } from '../models/ContractKindParameter.js';
import type { DateTimeParameter } from '../models/DateTimeParameter.js';
import type { Delegator } from '../models/Delegator.js';
import type { HistoricalBalance } from '../models/HistoricalBalance.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { Int64Parameter } from '../models/Int64Parameter.js';
import type { JsonParameter } from '../models/JsonParameter.js';
import type { MichelineFormat } from '../models/MichelineFormat.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { Operation } from '../models/Operation.js';
import type { OperationStatusParameter } from '../models/OperationStatusParameter.js';
import type { RelatedContract } from '../models/RelatedContract.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortMode } from '../models/SortMode.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { StringParameter } from '../models/StringParameter.js';
import type { Symbols } from '../models/Symbols.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class AccountsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get accounts
     * Returns a list of accounts.
     * @returns Account
     * @throws ApiError
     */
    accountsGet({ type, kind, delegate, balance, staked, lastActivity, select, sort, offset, limit, }: {
        /** Filters accounts by type (`user`, `delegate`, `contract`). **/
        type?: AccountTypeParameter | null;
        /** Filters accounts by contract kind (`delegator_contract` or `smart_contract`) **/
        kind?: ContractKindParameter | null;
        /** Filters accounts by delegate. Allowed fields for `.eqx` mode: none. **/
        delegate?: AccountParameter | null;
        /** Filters accounts by balance **/
        balance?: Int64Parameter | null;
        /** Filters accounts by participation in staking **/
        staked?: BoolParameter | null;
        /** Filters accounts by last activity level (where the account was updated) **/
        lastActivity?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `balance`, `firstActivity`, `lastActivity`, `numTransactions`, `numContracts`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Account>>;
    /**
     * Get accounts count
     * Returns a number of accounts.
     * @returns number
     * @throws ApiError
     */
    accountsGetCount({ type, kind, balance, staked, }: {
        /** Filters accounts by type (`user`, `delegate`, `contract`). **/
        type?: AccountTypeParameter | null;
        /** Filters accounts by contract kind (`delegator_contract` or `smart_contract`) **/
        kind?: ContractKindParameter | null;
        /** Filters accounts by balance **/
        balance?: Int64Parameter | null;
        /** Filters accounts by participation in staking **/
        staked?: BoolParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get account by address
     * Returns an account with the specified address.
     * @returns Account
     * @throws ApiError
     */
    accountsGetByAddress({ address, metadata, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Include or not account metadata **/
        metadata?: boolean;
    }): CancelablePromise<Account>;
    /**
     * Get account contracts
     * Returns a list of contracts created by (or related to) the specified account.
     * @returns RelatedContract
     * @throws ApiError
     */
    accountsGetContracts({ address, sort, offset, limit, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Sorts contracts by specified field. Supported fields: `id` (default, desc), `balance`, `creationLevel`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<RelatedContract>>;
    /**
     * Get account delegators
     * Returns a list of accounts delegated to the specified account.
     * @returns Delegator
     * @throws ApiError
     */
    accountsGetDelegators({ address, type, balance, delegationLevel, sort, offset, limit, }: {
        /** Account address (starting with tz) **/
        address: string | null;
        /** Filters delegators by type (`user`, `delegate`, `contract`). **/
        type?: AccountTypeParameter | null;
        /** Filters delegators by balance. **/
        balance?: Int64Parameter | null;
        /** Number of items to skip **/
        delegationLevel?: Int32Parameter | null;
        /** Sorts delegators by specified field. Supported fields: `delegationLevel` (default, desc), `balance`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Delegator>>;
    /**
     * Get account operations
     * Returns a list of operations related to the specified account.
     * Note: for better flexibility this endpoint accumulates query parameters (filters) of each `/operations/{type}` endpoint,
     * so a particular filter may affect several operation types containing this filter.
     * For example, if you specify an `initiator` it will affect all transactions, delegations and originations,
     * because all these types have an `initiator` field.
     * @returns Operation
     * @throws ApiError
     */
    accountsGetOperations({ address, type, initiator, sender, target, prevDelegate, newDelegate, contractManager, contractDelegate, originatedContract, accuser, offender, baker, level, timestamp, entrypoint, parameter, parameters, hasInternals, status, sort, lastId, limit, micheline, quote, from, to, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Comma separated list of operation types to return (`endorsement`, `ballot`, `proposal`, `activation`, `double_baking`, `double_endorsing`, `nonce_revelation`, `delegation`, `origination`, `transaction`, `reveal`, `migration`, `revelation_penalty`, `baking`). If not specified then all operation types except `endorsement` and `baking` will be returned. **/
        type?: string | null;
        /** Filters transactions, delegations and originations by initiator. Allowed fields for `.eqx` mode: none. **/
        initiator?: AccountParameter | null;
        /** Filters transactions, delegations, originations, reveals and seed nonce revelations by sender. Allowed fields for `.eqx` mode: none. **/
        sender?: AccountParameter | null;
        /** Filters transactions by target. Allowed fields for `.eqx` mode: none. **/
        target?: AccountParameter | null;
        /** Filters delegations by prev delegate. Allowed fields for `.eqx` mode: none. **/
        prevDelegate?: AccountParameter | null;
        /** Filters delegations by new delegate. Allowed fields for `.eqx` mode: none. **/
        newDelegate?: AccountParameter | null;
        /** Filters origination operations by manager. Allowed fields for `.eqx` mode: none. **/
        contractManager?: AccountParameter | null;
        /** Filters origination operations by delegate. Allowed fields for `.eqx` mode: none. **/
        contractDelegate?: AccountParameter | null;
        /** Filters origination operations by originated contract. Allowed fields for `.eqx` mode: none. **/
        originatedContract?: AccountParameter | null;
        /** Filters double baking and double endorsing by accuser. Allowed fields for `.eqx` mode: none. **/
        accuser?: AccountParameter | null;
        /** Filters double baking and double endorsing by offender. Allowed fields for `.eqx` mode: none. **/
        offender?: AccountParameter | null;
        /** Filters seed nonce revelation operations by baker. Allowed fields for `.eqx` mode: none. **/
        baker?: AccountParameter | null;
        /** Filters operations by level. **/
        level?: Int32Parameter | null;
        /** Filters operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters transactions by entrypoint called on the target contract. **/
        entrypoint?: StringParameter | null;
        /** Filters transactions by parameter value. Note, this query parameter supports the following format: `?parameter{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?parameter.token_id=...` or `?parameter.sigs.0.ne=...`. **/
        parameter?: JsonParameter | null;
        /** **DEPRECATED**. Use `entrypoint` and `parameter` instead. **/
        parameters?: StringParameter | null;
        /** Filters transactions by presence of internal operations. **/
        hasInternals?: BoolParameter | null;
        /** Filters transactions, delegations, originations and reveals by operation status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
        /** Sort mode (0 - ascending, 1 - descending), operations of different types can only be sorted by ID. **/
        sort?: SortMode;
        /** Id of the last operation received, which is used as an offset for pagination **/
        lastId?: number | null;
        /** Number of items to return **/
        limit?: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
        /** **DEPRECATED**. Use `timestamp.ge=` intead. **/
        from?: string | null;
        /** **DEPRECATED**. Use `timestamp.lt=` intead. **/
        to?: string | null;
    }): CancelablePromise<Array<Operation>>;
    /**
     * Get account metadata
     * Returns metadata of the specified account (alias, logo, website, contacts, etc).
     * @returns AccountMetadata
     * @throws ApiError
     */
    accountsGetMetadata({ address, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
    }): CancelablePromise<AccountMetadata>;
    /**
     * Get counter
     * Returns account counter
     * @returns number
     * @throws ApiError
     */
    accountsGetCounter({ address, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
    }): CancelablePromise<number>;
    /**
     * Get balance
     * Returns account balance
     * @returns number
     * @throws ApiError
     */
    accountsGetBalance({ address, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
    }): CancelablePromise<number>;
    /**
     * Get balance at level
     * Returns account balance at the specified block
     * @returns number
     * @throws ApiError
     */
    accountsGetBalanceAtLevel({ address, level, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Block height at which you want to know account balance **/
        level: number;
    }): CancelablePromise<number>;
    /**
     * Get balance at date
     * Returns account balance at the specified datetime
     * @returns number
     * @throws ApiError
     */
    accountsGetBalanceAtDate({ address, datetime, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Datetime at which you want to know account balance (e.g. `2020-01-01`, or `2019-12-30T23:42:59Z`) **/
        datetime: string;
    }): CancelablePromise<number>;
    /**
     * Get balance history
     * Returns time series with historical balances (only changes, without duplicates).
     * @returns HistoricalBalance
     * @throws ApiError
     */
    accountsGetBalanceHistory({ address, step, select, sort, offset, limit, quote, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Step of the time series, for example if `step = 1000` you will get balances at blocks `1000, 2000, 3000, ...`. **/
        step?: number | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts historical balances by specified field. Supported fields: `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: number;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<HistoricalBalance>>;
    /**
     * Get account report
     * Exports account balance report in .csv format
     * @returns binary
     * @throws ApiError
     */
    accountsGetBalanceReport({ address, from, to, currency, historical, delimiter, separator, }: {
        /** Account address (starting with tz or KT) **/
        address: string | null;
        /** Start of the datetime range to filter by (ISO 8601, e.g. 2019-11-31) **/
        from?: string | null;
        /** End of the datetime range to filter by (ISO 8601, e.g. 2019-12-31) **/
        to?: string | null;
        /** Currency to convert amounts to (`btc`, `eur`, `usd`, `cny`, `jpy`, `krw`, `eth`, `gbp`) **/
        currency?: string | null;
        /** `true` if you want to use historical prices, `false` to use current price **/
        historical?: boolean;
        /** Column delimiter (`comma`, `semicolon`) **/
        delimiter?: string | null;
        /** Decimal separator (`comma`, `point`) **/
        separator?: string | null;
    }): CancelablePromise<Blob>;
}
