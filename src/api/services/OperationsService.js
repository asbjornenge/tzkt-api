export class OperationsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get operations by hash
     * Returns a list of operations with the specified hash.
     * @returns Operation
     * @throws ApiError
     */
    operationsGetByHash({ hash, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get operations by hash and counter
     * Returns a list of operations with the specified hash and counter.
     * @returns Operation
     * @throws ApiError
     */
    operationsGetByHashCounter({ hash, counter, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/{hash}/{counter}',
            path: {
                'hash': hash,
                'counter': counter,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get operations by hash, counter and nonce
     * Returns an internal operations with the specified hash, counter and nonce.
     * @returns Operation
     * @throws ApiError
     */
    operationsGetByHashCounterNonce({ hash, counter, nonce, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/{hash}/{counter}/{nonce}',
            path: {
                'hash': hash,
                'counter': counter,
                'nonce': nonce,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get endorsements
     * Returns a list of endorsement operations.
     * @returns EndorsementOperation
     * @throws ApiError
     */
    operationsGetEndorsements({ delegate, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/endorsements',
            query: {
                'delegate': delegate,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get endorsement by hash
     * Returns an endorsement operation with specified hash.
     * @returns EndorsementOperation
     * @throws ApiError
     */
    operationsGetEndorsementByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/endorsements/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get endorsements count
     * Returns the total number of endorsement operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetEndorsementsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/endorsements/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get ballots
     * Returns a list of ballot operations.
     * @returns BallotOperation
     * @throws ApiError
     */
    operationsGetBallots({ delegate, level, timestamp, epoch, period, proposal, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/ballots',
            query: {
                'delegate': delegate,
                'level': level,
                'timestamp': timestamp,
                'epoch': epoch,
                'period': period,
                'proposal': proposal,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get ballot by hash
     * Returns a ballot operation with specified hash.
     * @returns BallotOperation
     * @throws ApiError
     */
    operationsGetBallotByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/ballots/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get ballots count
     * Returns the total number of ballot operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetBallotsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/ballots/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get proposals
     * Returns a list of proposal operations.
     * @returns ProposalOperation
     * @throws ApiError
     */
    operationsGetProposals({ delegate, level, timestamp, epoch, period, proposal, duplicated, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/proposals',
            query: {
                'delegate': delegate,
                'level': level,
                'timestamp': timestamp,
                'epoch': epoch,
                'period': period,
                'proposal': proposal,
                'duplicated': duplicated,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get proposal by hash
     * Returns a proposal operation with specified hash.
     * @returns ProposalOperation
     * @throws ApiError
     */
    operationsGetProposalByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/proposals/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get proposals count
     * Returns the total number of proposal operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetProposalsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/proposals/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get activations
     * Returns a list of activation operations.
     * @returns ActivationOperation
     * @throws ApiError
     */
    operationsGetActivations({ account, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/activations',
            query: {
                'account': account,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get activation by hash
     * Returns an activation operation with specified hash.
     * @returns ActivationOperation
     * @throws ApiError
     */
    operationsGetActivationByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/activations/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get activations count
     * Returns the total number of activation operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetActivationsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/activations/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get double baking
     * Returns a list of double baking operations.
     * @returns DoubleBakingOperation
     * @throws ApiError
     */
    operationsGetDoubleBaking({ anyof, accuser, offender, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/double_baking',
            query: {
                'anyof': anyof,
                'accuser': accuser,
                'offender': offender,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get double baking by hash
     * Returns a double baking operation with specified hash.
     * @returns DoubleBakingOperation
     * @throws ApiError
     */
    operationsGetDoubleBakingByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/double_baking/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get double baking count
     * Returns the total number of double baking operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetDoubleBakingCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/double_baking/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get double endorsing
     * Returns a list of double endorsing operations.
     * @returns DoubleEndorsingOperation
     * @throws ApiError
     */
    operationsGetDoubleEndorsing({ anyof, accuser, offender, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/double_endorsing',
            query: {
                'anyof': anyof,
                'accuser': accuser,
                'offender': offender,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get double endorsing by hash
     * Returns a double endorsing operation with specified hash.
     * @returns DoubleEndorsingOperation
     * @throws ApiError
     */
    operationsGetDoubleEndorsingByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/double_endorsing/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get double endorsing count
     * Returns the total number of double endorsing operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetDoubleEndorsingCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/double_endorsing/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get nonce revelations
     * Returns a list of seed nonce revelation operations.
     * @returns NonceRevelationOperation
     * @throws ApiError
     */
    operationsGetNonceRevelations({ anyof, baker, sender, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/nonce_revelations',
            query: {
                'anyof': anyof,
                'baker': baker,
                'sender': sender,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get nonce revelation by hash
     * Returns a seed nonce revelation operation with specified hash.
     * @returns NonceRevelationOperation
     * @throws ApiError
     */
    operationsGetNonceRevelationByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/nonce_revelations/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get nonce revelations count
     * Returns the total number of seed nonce revelation operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetNonceRevelationsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/nonce_revelations/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get delegations
     * Returns a list of delegation operations.
     * @returns DelegationOperation
     * @throws ApiError
     */
    operationsGetDelegations({ anyof, initiator, sender, prevDelegate, newDelegate, level, timestamp, status, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/delegations',
            query: {
                'anyof': anyof,
                'initiator': initiator,
                'sender': sender,
                'prevDelegate': prevDelegate,
                'newDelegate': newDelegate,
                'level': level,
                'timestamp': timestamp,
                'status': status,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get delegation by hash
     * Returns a delegation operation with specified hash.
     * @returns DelegationOperation
     * @throws ApiError
     */
    operationsGetDelegationByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/delegations/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get delegations count
     * Returns the total number of delegation operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetDelegationsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/delegations/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get originations
     * Returns a list of origination operations.
     * @returns OriginationOperation
     * @throws ApiError
     */
    operationsGetOriginations({ anyof, initiator, sender, contractManager, contractDelegate, originatedContract, typeHash, codeHash, level, timestamp, status, select, sort, offset, limit = 100, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/originations',
            query: {
                'anyof': anyof,
                'initiator': initiator,
                'sender': sender,
                'contractManager': contractManager,
                'contractDelegate': contractDelegate,
                'originatedContract': originatedContract,
                'typeHash': typeHash,
                'codeHash': codeHash,
                'level': level,
                'timestamp': timestamp,
                'status': status,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get origination by hash
     * Returns origination operations with specified hash.
     * @returns OriginationOperation
     * @throws ApiError
     */
    operationsGetOriginationByHash({ hash, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/originations/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get originations count
     * Returns the total number of origination operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetOriginationsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/originations/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get transactions
     * Returns a list of transaction operations.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactions({ anyof, initiator, sender, target, amount, id, level, timestamp, entrypoint, parameter, parameters, hasInternals, status, select, sort, offset, limit = 100, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/transactions',
            query: {
                'anyof': anyof,
                'initiator': initiator,
                'sender': sender,
                'target': target,
                'amount': amount,
                'id': id,
                'level': level,
                'timestamp': timestamp,
                'entrypoint': entrypoint,
                'parameter': parameter,
                'parameters': parameters,
                'hasInternals': hasInternals,
                'status': status,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get transaction by hash
     * Returns transaction operations with specified hash.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactionByHash({ hash, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/transactions/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get transaction by hash and counter
     * Returns transaction operations with specified hash and counter.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactionByHashCounter({ hash, counter, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/transactions/{hash}/{counter}',
            path: {
                'hash': hash,
                'counter': counter,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get transaction by hash, counter and nonce
     * Returns an internal transaction operation with specified hash, counter and nonce.
     * @returns TransactionOperation
     * @throws ApiError
     */
    operationsGetTransactionByHashCounterNonce({ hash, counter, nonce, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/transactions/{hash}/{counter}/{nonce}',
            path: {
                'hash': hash,
                'counter': counter,
                'nonce': nonce,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get transactions count
     * Returns the total number of transaction operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetTransactionsCount({ level, timestamp, status, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/transactions/count',
            query: {
                'level': level,
                'timestamp': timestamp,
                'status': status,
            },
        });
    }
    /**
     * Get reveals
     * Returns a list of reveal operations.
     * @returns RevealOperation
     * @throws ApiError
     */
    operationsGetReveals({ sender, level, timestamp, status, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/reveals',
            query: {
                'sender': sender,
                'level': level,
                'timestamp': timestamp,
                'status': status,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get reveal by hash
     * Returns reveal operation with specified hash.
     * @returns RevealOperation
     * @throws ApiError
     */
    operationsGetRevealByHash({ hash, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/reveals/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get reveals count
     * Returns the total number of reveal operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetRevealsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/reveals/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get register constants
     * Returns a list of register global constant operations.
     * @returns RegisterConstantOperation
     * @throws ApiError
     */
    operationsGetRegisterConstants({ sender, address, level, timestamp, status, select, sort, offset, limit = 100, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/register_constants',
            query: {
                'sender': sender,
                'address': address,
                'level': level,
                'timestamp': timestamp,
                'status': status,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get register constant by hash
     * Returns register global constant operation with specified hash.
     * @returns RegisterConstantOperation
     * @throws ApiError
     */
    operationsGetRegisterConstantByHash({ hash, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/register_constants/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get register constants count
     * Returns the total number of register global constant operations.
     * @returns number
     * @throws ApiError
     */
    operationsGetRegisterConstantsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/register_constants/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get migrations
     * Returns a list of migration operations (synthetic type).
     * @returns MigrationOperation
     * @throws ApiError
     */
    operationsGetMigrations({ account, kind, balanceChange, level, timestamp, select, sort, offset, limit = 100, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/migrations',
            query: {
                'account': account,
                'kind': kind,
                'balanceChange': balanceChange,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get migration by id
     * Returns migration operation with specified id.
     * @returns MigrationOperation
     * @throws ApiError
     */
    operationsGetMigrationById({ id, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/migrations/{id}',
            path: {
                'id': id,
            },
            query: {
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get migrations count
     * Returns the total number of migration operations (synthetic type).
     * @returns number
     * @throws ApiError
     */
    operationsGetMigrationsCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/migrations/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get revelation penalties
     * Returns a list of revelation penalty operations (synthetic type).
     * @returns RevelationPenaltyOperation
     * @throws ApiError
     */
    operationsGetRevelationPenalties({ baker, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/revelation_penalties',
            query: {
                'baker': baker,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get revelation penalty by id
     * Returns revelation penalty operation with specified id.
     * @returns RevelationPenaltyOperation
     * @throws ApiError
     */
    operationsGetRevelationPenaltyById({ id, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/revelation_penalties/{id}',
            path: {
                'id': id,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get revelation penalties count
     * Returns the total number of revelation penalty operations (synthetic type).
     * @returns number
     * @throws ApiError
     */
    operationsGetRevelationPenaltiesCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/revelation_penalties/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
    /**
     * Get baking
     * Returns a list of baking operations (synthetic type).
     * @returns BakingOperation
     * @throws ApiError
     */
    operationsGetBaking({ baker, level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/baking',
            query: {
                'baker': baker,
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get baking by id
     * Returns baking operation with specified id.
     * @returns BakingOperation
     * @throws ApiError
     */
    operationsGetBakingById({ id, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/baking/{id}',
            path: {
                'id': id,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get baking count
     * Returns the total number of baking operations (synthetic type).
     * @returns number
     * @throws ApiError
     */
    operationsGetBakingCount({ level, timestamp, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/baking/count',
            query: {
                'level': level,
                'timestamp': timestamp,
            },
        });
    }
}
//# sourceMappingURL=OperationsService.js.map