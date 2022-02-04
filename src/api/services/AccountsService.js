export class AccountsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get accounts
     * Returns a list of accounts.
     * @returns Account
     * @throws ApiError
     */
    accountsGet({ type, kind, delegate, balance, staked, lastActivity, select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts',
            query: {
                'type': type,
                'kind': kind,
                'delegate': delegate,
                'balance': balance,
                'staked': staked,
                'lastActivity': lastActivity,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get accounts count
     * Returns a number of accounts.
     * @returns number
     * @throws ApiError
     */
    accountsGetCount({ type, kind, balance, staked, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/count',
            query: {
                'type': type,
                'kind': kind,
                'balance': balance,
                'staked': staked,
            },
        });
    }
    /**
     * Get account by address
     * Returns an account with the specified address.
     * @returns Account
     * @throws ApiError
     */
    accountsGetByAddress({ address, metadata = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}',
            path: {
                'address': address,
            },
            query: {
                'metadata': metadata,
            },
        });
    }
    /**
     * Get account contracts
     * Returns a list of contracts created by (or related to) the specified account.
     * @returns RelatedContract
     * @throws ApiError
     */
    accountsGetContracts({ address, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/contracts',
            path: {
                'address': address,
            },
            query: {
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get account delegators
     * Returns a list of accounts delegated to the specified account.
     * @returns Delegator
     * @throws ApiError
     */
    accountsGetDelegators({ address, type, balance, delegationLevel, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/delegators',
            path: {
                'address': address,
            },
            query: {
                'type': type,
                'balance': balance,
                'delegationLevel': delegationLevel,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
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
    accountsGetOperations({ address, type, initiator, sender, target, prevDelegate, newDelegate, contractManager, contractDelegate, originatedContract, accuser, offender, baker, level, timestamp, entrypoint, parameter, parameters, hasInternals, status, sort, lastId, limit = 100, micheline, quote, from, to, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/operations',
            path: {
                'address': address,
            },
            query: {
                'type': type,
                'initiator': initiator,
                'sender': sender,
                'target': target,
                'prevDelegate': prevDelegate,
                'newDelegate': newDelegate,
                'contractManager': contractManager,
                'contractDelegate': contractDelegate,
                'originatedContract': originatedContract,
                'accuser': accuser,
                'offender': offender,
                'baker': baker,
                'level': level,
                'timestamp': timestamp,
                'entrypoint': entrypoint,
                'parameter': parameter,
                'parameters': parameters,
                'hasInternals': hasInternals,
                'status': status,
                'sort': sort,
                'lastId': lastId,
                'limit': limit,
                'micheline': micheline,
                'quote': quote,
                'from': from,
                'to': to,
            },
        });
    }
    /**
     * Get account metadata
     * Returns metadata of the specified account (alias, logo, website, contacts, etc).
     * @returns AccountMetadata
     * @throws ApiError
     */
    accountsGetMetadata({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/metadata',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get counter
     * Returns account counter
     * @returns number
     * @throws ApiError
     */
    accountsGetCounter({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/counter',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get balance
     * Returns account balance
     * @returns number
     * @throws ApiError
     */
    accountsGetBalance({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/balance',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get balance at level
     * Returns account balance at the specified block
     * @returns number
     * @throws ApiError
     */
    accountsGetBalanceAtLevel({ address, level, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/balance_history/{level}',
            path: {
                'address': address,
                'level': level,
            },
        });
    }
    /**
     * Get balance at date
     * Returns account balance at the specified datetime
     * @returns number
     * @throws ApiError
     */
    accountsGetBalanceAtDate({ address, datetime, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/balance_history/{datetime}',
            path: {
                'address': address,
                'datetime': datetime,
            },
        });
    }
    /**
     * Get balance history
     * Returns time series with historical balances (only changes, without duplicates).
     * @returns HistoricalBalance
     * @throws ApiError
     */
    accountsGetBalanceHistory({ address, step, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/balance_history',
            path: {
                'address': address,
            },
            query: {
                'step': step,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get account report
     * Exports account balance report in .csv format
     * @returns binary
     * @throws ApiError
     */
    accountsGetBalanceReport({ address, from, to, currency, historical = false, delimiter = 'comma', separator = 'point', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{address}/report',
            path: {
                'address': address,
            },
            query: {
                'from': from,
                'to': to,
                'currency': currency,
                'historical': historical,
                'delimiter': delimiter,
                'separator': separator,
            },
        });
    }
}
//# sourceMappingURL=AccountsService.js.map