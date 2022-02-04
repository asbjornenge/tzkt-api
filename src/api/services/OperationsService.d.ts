import type { AccountParameter } from '../models/AccountParameter.js';
import type { ActivationOperation } from '../models/ActivationOperation.js';
import type { BakingOperation } from '../models/BakingOperation.js';
import type { BallotOperation } from '../models/BallotOperation.js';
import type { BoolParameter } from '../models/BoolParameter.js';
import type { DateTimeParameter } from '../models/DateTimeParameter.js';
import type { DelegationOperation } from '../models/DelegationOperation.js';
import type { DoubleBakingOperation } from '../models/DoubleBakingOperation.js';
import type { DoubleEndorsingOperation } from '../models/DoubleEndorsingOperation.js';
import type { EndorsementOperation } from '../models/EndorsementOperation.js';
import type { ExpressionParameter } from '../models/ExpressionParameter.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { Int64Parameter } from '../models/Int64Parameter.js';
import type { JsonParameter } from '../models/JsonParameter.js';
import type { MichelineFormat } from '../models/MichelineFormat.js';
import type { MigrationKindParameter } from '../models/MigrationKindParameter.js';
import type { MigrationOperation } from '../models/MigrationOperation.js';
import type { NonceRevelationOperation } from '../models/NonceRevelationOperation.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { Operation } from '../models/Operation.js';
import type { OperationStatusParameter } from '../models/OperationStatusParameter.js';
import type { OriginationOperation } from '../models/OriginationOperation.js';
import type { ProposalOperation } from '../models/ProposalOperation.js';
import type { ProtocolParameter } from '../models/ProtocolParameter.js';
import type { RegisterConstantOperation } from '../models/RegisterConstantOperation.js';
import type { RevealOperation } from '../models/RevealOperation.js';
import type { RevelationPenaltyOperation } from '../models/RevelationPenaltyOperation.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { StringParameter } from '../models/StringParameter.js';
import type { Symbols } from '../models/Symbols.js';
import type { TransactionOperation } from '../models/TransactionOperation.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class OperationsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get operations by hash
     * Returns a list of operations with the specified hash.
     * @returns Operation
     * @throws ApiError
     */
    operationsGetByHash({ hash, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Operation>>;
    /**
     * Get operations by hash and counter
     * Returns a list of operations with the specified hash and counter.
     * @returns Operation
     * @throws ApiError
     */
    operationsGetByHashCounter({ hash, counter, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Operation counter **/
        counter: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Operation>>;
    /**
     * Get operations by hash, counter and nonce
     * Returns an internal operations with the specified hash, counter and nonce.
     * @returns Operation
     * @throws ApiError
     */
    operationsGetByHashCounterNonce({ hash, counter, nonce, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Operation counter **/
        counter: number;
        /** Operation nonce (internal) **/
        nonce: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Operation>>;
    /**
     * Get endorsements
     * Returns a list of endorsement operations.
     * @returns EndorsementOperation
     * @throws ApiError
     */
    operationsGetEndorsements({ delegate, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters endorsements by delegate. Allowed fields for `.eqx` mode: none. **/
        delegate?: AccountParameter | null;
        /** Filters endorsements by level. **/
        level?: Int32Parameter | null;
        /** Filters endorsements by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts endorsements by specified field. Supported fields: `id` (default), `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<EndorsementOperation>>;
    /**
     * Get endorsement by hash
     * Returns an endorsement operation with specified hash.
     * @returns EndorsementOperation
     * @throws ApiError
     */
    operationsGetEndorsementByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<EndorsementOperation>>;
    /**
     * Get endorsements count
     * Returns the total number of endorsement operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetEndorsementsCount({ level, timestamp, }: {
        /** Filters endorsements by level. **/
        level?: Int32Parameter | null;
        /** Filters endorsements by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get ballots
     * Returns a list of ballot operations.
     * @returns BallotOperation
     * @throws ApiError
     */
    operationsGetBallots({ delegate, level, timestamp, epoch, period, proposal, select, sort, offset, limit, quote, }: {
        /** Filters ballots by delegate. Allowed fields for `.eqx` mode: none. **/
        delegate?: AccountParameter | null;
        /** Filters ballots by level. **/
        level?: Int32Parameter | null;
        /** Filters ballots by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters ballots by voting epoch. **/
        epoch?: Int32Parameter | null;
        /** Filters ballots by voting period. **/
        period?: Int32Parameter | null;
        /** Filters ballots by proposal hash. **/
        proposal?: ProtocolParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts ballots by specified field. Supported fields: `id` (default), `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<BallotOperation>>;
    /**
     * Get ballot by hash
     * Returns a ballot operation with specified hash.
     * @returns BallotOperation
     * @throws ApiError
     */
    operationsGetBallotByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<BallotOperation>>;
    /**
     * Get ballots count
     * Returns the total number of ballot operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetBallotsCount({ level, timestamp, }: {
        /** Filters ballot operations by level. **/
        level?: Int32Parameter | null;
        /** Filters ballot operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get proposals
     * Returns a list of proposal operations.
     * @returns ProposalOperation
     * @throws ApiError
     */
    operationsGetProposals({ delegate, level, timestamp, epoch, period, proposal, duplicated, select, sort, offset, limit, quote, }: {
        /** Filters proposal operations by delegate. Allowed fields for `.eqx` mode: none. **/
        delegate?: AccountParameter | null;
        /** Filters proposal operations by level. **/
        level?: Int32Parameter | null;
        /** Filters proposal operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters proposal operations by voting epoch. **/
        epoch?: Int32Parameter | null;
        /** Filters proposal operations by voting period. **/
        period?: Int32Parameter | null;
        /** Filters proposal operations by proposal hash. **/
        proposal?: ProtocolParameter | null;
        /** Specify whether to include or exclude duplicates, which didn't actually upvote a proposal. **/
        duplicated?: BoolParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts proposal operations by specified field. Supported fields: `id` (default), `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<ProposalOperation>>;
    /**
     * Get proposal by hash
     * Returns a proposal operation with specified hash.
     * @returns ProposalOperation
     * @throws ApiError
     */
    operationsGetProposalByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<ProposalOperation>>;
    /**
     * Get proposals count
     * Returns the total number of proposal operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetProposalsCount({ level, timestamp, }: {
        /** Filters proposal operations by level. **/
        level?: Int32Parameter | null;
        /** Filters proposal operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get activations
     * Returns a list of activation operations.
     * @returns ActivationOperation
     * @throws ApiError
     */
    operationsGetActivations({ account, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters activations by account. Allowed fields for `.eqx` mode: none. **/
        account?: AccountParameter | null;
        /** Filters activations by level. **/
        level?: Int32Parameter | null;
        /** Filters activations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts activations by specified field. Supported fields: `id` (default), `level`, `balance`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<ActivationOperation>>;
    /**
     * Get activation by hash
     * Returns an activation operation with specified hash.
     * @returns ActivationOperation
     * @throws ApiError
     */
    operationsGetActivationByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<ActivationOperation>>;
    /**
     * Get activations count
     * Returns the total number of activation operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetActivationsCount({ level, timestamp, }: {
        /** Filters activations by level. **/
        level?: Int32Parameter | null;
        /** Filters activations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get double baking
     * Returns a list of double baking operations.
     * @returns DoubleBakingOperation
     * @throws ApiError
     */
    operationsGetDoubleBaking({ anyof, accuser, offender, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters double baking operations by any of the specified fields. Example: `anyof.accuser.offender=tz1...` will return operations where `accuser` OR `offender` is equal to the specified value. This parameter is useful when you need to retrieve all operations associated with a specified account. **/
        anyof?: string | null;
        /** Filters double baking operations by accuser. Allowed fields for `.eqx` mode: `offender`. **/
        accuser?: AccountParameter | null;
        /** Filters double baking operations by offender. Allowed fields for `.eqx` mode: `accuser`. **/
        offender?: AccountParameter | null;
        /** Filters double baking operations by level. **/
        level?: Int32Parameter | null;
        /** Filters double baking operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts double baking operations by specified field. Supported fields: `id` (default), `level`, `accusedLevel`, `accuserRewards`, `offenderLostDeposits`, `offenderLostRewards`, `offenderLostFees`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DoubleBakingOperation>>;
    /**
     * Get double baking by hash
     * Returns a double baking operation with specified hash.
     * @returns DoubleBakingOperation
     * @throws ApiError
     */
    operationsGetDoubleBakingByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DoubleBakingOperation>>;
    /**
     * Get double baking count
     * Returns the total number of double baking operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetDoubleBakingCount({ level, timestamp, }: {
        /** Filters double baking operations by level. **/
        level?: Int32Parameter | null;
        /** Filters double baking operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get double endorsing
     * Returns a list of double endorsing operations.
     * @returns DoubleEndorsingOperation
     * @throws ApiError
     */
    operationsGetDoubleEndorsing({ anyof, accuser, offender, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters double endorsing operations by any of the specified fields. Example: `anyof.accuser.offender=tz1...` will return operations where `accuser` OR `offender` is equal to the specified value. This parameter is useful when you need to retrieve all operations associated with a specified account. **/
        anyof?: string | null;
        /** Filters double endorsing operations by accuser. Allowed fields for `.eqx` mode: `offender`. **/
        accuser?: AccountParameter | null;
        /** Filters double endorsing operations by offender. Allowed fields for `.eqx` mode: `accuser`. **/
        offender?: AccountParameter | null;
        /** Filters double endorsing operations by level. **/
        level?: Int32Parameter | null;
        /** Filters double endorsing operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts double endorsing operations by specified field. Supported fields: `id` (default), `level`, `accusedLevel`, `accuserRewards`, `offenderLostDeposits`, `offenderLostRewards`, `offenderLostFees`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DoubleEndorsingOperation>>;
    /**
     * Get double endorsing by hash
     * Returns a double endorsing operation with specified hash.
     * @returns DoubleEndorsingOperation
     * @throws ApiError
     */
    operationsGetDoubleEndorsingByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DoubleEndorsingOperation>>;
    /**
     * Get double endorsing count
     * Returns the total number of double endorsing operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetDoubleEndorsingCount({ level, timestamp, }: {
        /** Filters double endorsing operations by level. **/
        level?: Int32Parameter | null;
        /** Filters double endorsing operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get nonce revelations
     * Returns a list of seed nonce revelation operations.
     * @returns NonceRevelationOperation
     * @throws ApiError
     */
    operationsGetNonceRevelations({ anyof, baker, sender, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters nonce revelation operations by any of the specified fields. Example: `anyof.baker.sender=tz1...` will return operations where `baker` OR `sender` is equal to the specified value. This parameter is useful when you need to retrieve all operations associated with a specified account. **/
        anyof?: string | null;
        /** Filters nonce revelation operations by baker. Allowed fields for `.eqx` mode: `sender`. **/
        baker?: AccountParameter | null;
        /** Filters nonce revelation operations by sender. Allowed fields for `.eqx` mode: `baker`. **/
        sender?: AccountParameter | null;
        /** Filters nonce revelation operations by level. **/
        level?: Int32Parameter | null;
        /** Filters nonce revelation operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts nonce revelation operations by specified field. Supported fields: `id` (default), `level`, `revealedLevel`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<NonceRevelationOperation>>;
    /**
     * Get nonce revelation by hash
     * Returns a seed nonce revelation operation with specified hash.
     * @returns NonceRevelationOperation
     * @throws ApiError
     */
    operationsGetNonceRevelationByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<NonceRevelationOperation>>;
    /**
     * Get nonce revelations count
     * Returns the total number of seed nonce revelation operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetNonceRevelationsCount({ level, timestamp, }: {
        /** Filters seed nonce revelation operations by level. **/
        level?: Int32Parameter | null;
        /** Filters seed nonce revelation operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get delegations
     * Returns a list of delegation operations.
     * @returns DelegationOperation
     * @throws ApiError
     */
    operationsGetDelegations({ anyof, initiator, sender, prevDelegate, newDelegate, level, timestamp, status, select, sort, offset, limit, quote, }: {
        /** Filters delegations by any of the specified fields. Example: `anyof.prevDelegate.newDelegate=tz1...` will return operations where `prevDelegate` OR `newDelegate` is equal to the specified value. This parameter is useful when you need to retrieve all delegations associated with a specified account. **/
        anyof?: string | null;
        /** Filters delegations by initiator. Allowed fields for `.eqx` mode: `prevDelegate`, `newDelegate`. **/
        initiator?: AccountParameter | null;
        /** Filters delegations by sender. Allowed fields for `.eqx` mode: `prevDelegate`, `newDelegate`. **/
        sender?: AccountParameter | null;
        /** Filters delegations by prev delegate. Allowed fields for `.eqx` mode: `initiator`, `sender`, `newDelegate`. **/
        prevDelegate?: AccountParameter | null;
        /** Filters delegations by new delegate. Allowed fields for `.eqx` mode: `initiator`, `sender`, `prevDelegate`. **/
        newDelegate?: AccountParameter | null;
        /** Filters delegations by level. **/
        level?: Int32Parameter | null;
        /** Filters delegations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters delegations by operation status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegations by specified field. Supported fields: `id` (default), `level`, `gasUsed`, `bakerFee`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DelegationOperation>>;
    /**
     * Get delegation by hash
     * Returns a delegation operation with specified hash.
     * @returns DelegationOperation
     * @throws ApiError
     */
    operationsGetDelegationByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DelegationOperation>>;
    /**
     * Get delegations count
     * Returns the total number of delegation operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetDelegationsCount({ level, timestamp, }: {
        /** Filters delegations by level. **/
        level?: Int32Parameter | null;
        /** Filters delegations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get originations
     * Returns a list of origination operations.
     * @returns OriginationOperation
     * @throws ApiError
     */
    operationsGetOriginations({ anyof, initiator, sender, contractManager, contractDelegate, originatedContract, typeHash, codeHash, level, timestamp, status, select, sort, offset, limit, micheline, quote, }: {
        /** Filters originations by any of the specified fields. Example: `anyof.sender.initiator=tz1...` will return operations where `sender` OR `initiator` is equal to the specified value. This parameter is useful when you need to retrieve all originations associated with a specified account. **/
        anyof?: string | null;
        /** Filters origination operations by initiator. Allowed fields for `.eqx` mode: `contractManager`, `contractDelegate`. **/
        initiator?: AccountParameter | null;
        /** Filters origination operations by sender. Allowed fields for `.eqx` mode: `contractManager`, `contractDelegate`. **/
        sender?: AccountParameter | null;
        /** Filters origination operations by manager. Allowed fields for `.eqx` mode: `initiator`, `sender`, `contractDelegate`. **/
        contractManager?: AccountParameter | null;
        /** Filters origination operations by delegate. Allowed fields for `.eqx` mode: `initiator`, `sender`, `contractManager`. **/
        contractDelegate?: AccountParameter | null;
        /** Filters origination operations by originated contract. Allowed fields for `.eqx` mode: none. **/
        originatedContract?: AccountParameter | null;
        /** Filters origination operations by 32-bit hash of originated contract parameter and storage types (helpful for searching originations of similar contracts) **/
        typeHash?: Int32Parameter | null;
        /** Filters origination operations by 32-bit hash of originated contract code (helpful for searching originations of same contracts) **/
        codeHash?: Int32Parameter | null;
        /** Filters origination operations by level. **/
        level?: Int32Parameter | null;
        /** Filters origination operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters origination operations by operation status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts originations by specified field. Supported fields: `id` (default), `level`, `gasUsed`, `storageUsed`, `bakerFee`, `storageFee`, `allocationFee`, `contractBalance`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<OriginationOperation>>;
    /**
     * Get origination by hash
     * Returns origination operations with specified hash.
     * @returns OriginationOperation
     * @throws ApiError
     */
    operationsGetOriginationByHash({ hash, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<OriginationOperation>>;
    /**
     * Get originations count
     * Returns the total number of origination operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetOriginationsCount({ level, timestamp, }: {
        /** Filters originations by level. **/
        level?: Int32Parameter | null;
        /** Filters originations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get transactions
     * Returns a list of transaction operations.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactions({ anyof, initiator, sender, target, amount, id, level, timestamp, entrypoint, parameter, parameters, hasInternals, status, select, sort, offset, limit, micheline, quote, }: {
        /** Filters transactions by any of the specified fields. Example: `anyof.sender.target=tz1...` will return operations where `sender` OR `target` is equal to the specified value. This parameter is useful when you need to retrieve all transactions associated with a specified account. **/
        anyof?: string | null;
        /** Filters transactions by initiator. Allowed fields for `.eqx` mode: `target`. **/
        initiator?: AccountParameter | null;
        /** Filters transactions by sender. Allowed fields for `.eqx` mode: `target`. **/
        sender?: AccountParameter | null;
        /** Filters transactions by target. Allowed fields for `.eqx` mode: `sender`, `initiator`. **/
        target?: AccountParameter | null;
        /** Filters transactions by amount (microtez). **/
        amount?: Int64Parameter | null;
        /** Filters transactions by id. **/
        id?: Int32Parameter | null;
        /** Filters transactions by level. **/
        level?: Int32Parameter | null;
        /** Filters transactions by timestamp. **/
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
        /** Filters transactions by operation status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts transactions by specified field. Supported fields: `id` (default), `level`, `gasUsed`, `storageUsed`, `bakerFee`, `storageFee`, `allocationFee`, `amount`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<TransactionOperation>>;
    /**
     * Get transaction by hash
     * Returns transaction operations with specified hash.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactionByHash({ hash, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<TransactionOperation>>;
    /**
     * Get transaction by hash and counter
     * Returns transaction operations with specified hash and counter.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactionByHashCounter({ hash, counter, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Operation counter **/
        counter: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<TransactionOperation>>;
    /**
     * Get transaction by hash, counter and nonce
     * Returns an internal transaction operation with specified hash, counter and nonce.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactionByHashCounterNonce({ hash, counter, nonce, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Operation counter **/
        counter: number;
        /** Operation nonce (internal) **/
        nonce: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<TransactionOperation>>;
    /**
     * Get transactions count
     * Returns the total number of transaction operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetTransactionsCount({ level, timestamp, status, }: {
        /** Filters transactions by level. **/
        level?: Int32Parameter | null;
        /** Filters transactions by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters transactions by operation status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get reveals
     * Returns a list of reveal operations.
     * @returns RevealOperation
     * @throws ApiError
     */
    operationsGetReveals({ sender, level, timestamp, status, select, sort, offset, limit, quote, }: {
        /** Filters reveal operations by sender. Allowed fields for `.eqx` mode: none. **/
        sender?: AccountParameter | null;
        /** Filters reveal operations by level. **/
        level?: Int32Parameter | null;
        /** Filters reveal operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters reveal operations by operation status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts reveals by specified field. Supported fields: `id` (default), `level`, `gasUsed`, `bakerFee`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<RevealOperation>>;
    /**
     * Get reveal by hash
     * Returns reveal operation with specified hash.
     * @returns RevealOperation
     * @throws ApiError
     */
    operationsGetRevealByHash({ hash, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<RevealOperation>>;
    /**
     * Get reveals count
     * Returns the total number of reveal operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetRevealsCount({ level, timestamp, }: {
        /** Filters reveals by level. **/
        level?: Int32Parameter | null;
        /** Filters reveals by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get register constants
     * Returns a list of register global constant operations.
     * @returns RegisterConstantOperation
     * @throws ApiError
     */
    operationsGetRegisterConstants({ sender, address, level, timestamp, status, select, sort, offset, limit, micheline, quote, }: {
        /** Filters operations by sender. Allowed fields for `.eqx` mode: none. **/
        sender?: AccountParameter | null;
        /** Filters operations by global address of the created constant (starts with `expr..`). **/
        address?: ExpressionParameter | null;
        /** Filters operations by level. **/
        level?: Int32Parameter | null;
        /** Filters operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters operations by status (`applied`, `failed`, `backtracked`, `skipped`). **/
        status?: OperationStatusParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts operations by specified field. Supported fields: `id` (default), `level`, `gasUsed`, `storageUsed`, `bakerFee`, `storageFee`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the constant value: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<RegisterConstantOperation>>;
    /**
     * Get register constant by hash
     * Returns register global constant operation with specified hash.
     * @returns RegisterConstantOperation
     * @throws ApiError
     */
    operationsGetRegisterConstantByHash({ hash, micheline, quote, }: {
        /** Operation hash **/
        hash: string | null;
        /** Format of the constant value: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<RegisterConstantOperation>>;
    /**
     * Get register constants count
     * Returns the total number of register global constant operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetRegisterConstantsCount({ level, timestamp, }: {
        /** Filters operations by level. **/
        level?: Int32Parameter | null;
        /** Filters operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get migrations
     * Returns a list of migration operations (synthetic type).
     * @returns MigrationOperation
     * @throws ApiError
     */
    operationsGetMigrations({ account, kind, balanceChange, level, timestamp, select, sort, offset, limit, micheline, quote, }: {
        /** Filters migration operations by account. Allowed fields for `.eqx` mode: none. **/
        account?: AccountParameter | null;
        /** Filters migration operations by kind (`bootstrap`, `activate_delegate`, `airdrop`, `proposal_invoice`, `origination`, `subsidy`). **/
        kind?: MigrationKindParameter | null;
        /** Filters migration operations by amount. **/
        balanceChange?: Int64Parameter | null;
        /** Filters migration operations by level. **/
        level?: Int32Parameter | null;
        /** Filters migration operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts migrations by specified field. Supported fields: `id` (default), `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<MigrationOperation>>;
    /**
     * Get migration by id
     * Returns migration operation with specified id.
     * @returns MigrationOperation
     * @throws ApiError
     */
    operationsGetMigrationById({ id, micheline, quote, }: {
        /** Operation id **/
        id: number;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<MigrationOperation>;
    /**
     * Get migrations count
     * Returns the total number of migration operations (synthetic type).
     * @returns number
     * @throws ApiError
     */
    operationsGetMigrationsCount({ level, timestamp, }: {
        /** Filters migrations by level. **/
        level?: Int32Parameter | null;
        /** Filters migrations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get revelation penalties
     * Returns a list of revelation penalty operations (synthetic type).
     * @returns RevelationPenaltyOperation
     * @throws ApiError
     */
    operationsGetRevelationPenalties({ baker, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters revelation penalty operations by baker. Allowed fields for `.eqx` mode: none. **/
        baker?: AccountParameter | null;
        /** Filters revelation penalty operations by level. **/
        level?: Int32Parameter | null;
        /** Filters revelation penalty operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts revelation penalty operations by specified field. Supported fields: `id` (default), `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<RevelationPenaltyOperation>>;
    /**
     * Get revelation penalty by id
     * Returns revelation penalty operation with specified id.
     * @returns RevelationPenaltyOperation
     * @throws ApiError
     */
    operationsGetRevelationPenaltyById({ id, quote, }: {
        /** Operation id **/
        id: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<RevelationPenaltyOperation>;
    /**
     * Get revelation penalties count
     * Returns the total number of revelation penalty operations (synthetic type).
     * @returns number
     * @throws ApiError
     */
    operationsGetRevelationPenaltiesCount({ level, timestamp, }: {
        /** Filters revelation penalty operations by level. **/
        level?: Int32Parameter | null;
        /** Filters revelation penalty operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get baking
     * Returns a list of baking operations (synthetic type).
     * @returns BakingOperation
     * @throws ApiError
     */
    operationsGetBaking({ baker, level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters baking operations by baker. Allowed fields for `.eqx` mode: none. **/
        baker?: AccountParameter | null;
        /** Filters baking operations by level. **/
        level?: Int32Parameter | null;
        /** Filters baking operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts baking operations by specified field. Supported fields: `id` (default), `level`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<BakingOperation>>;
    /**
     * Get baking by id
     * Returns baking operation with specified id.
     * @returns BakingOperation
     * @throws ApiError
     */
    operationsGetBakingById({ id, quote, }: {
        /** Operation id **/
        id: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<BakingOperation>;
    /**
     * Get baking count
     * Returns the total number of baking operations (synthetic type).
     * @returns number
     * @throws ApiError
     */
    operationsGetBakingCount({ level, timestamp, }: {
        /** Filters baking operations by level. **/
        level?: Int32Parameter | null;
        /** Filters baking operations by timestamp. **/
        timestamp?: DateTimeParameter | null;
    }): CancelablePromise<number>;
}
