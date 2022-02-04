export class ContractsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get contracts
     * Returns a list of contract accounts.
     * @returns Contract
     * @throws ApiError
     */
    contractsGet({ kind, creator, manager, delegate, balance, lastActivity, typeHash, codeHash, select, sort, offset, limit = 100, includeStorage = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts',
            query: {
                'kind': kind,
                'creator': creator,
                'manager': manager,
                'delegate': delegate,
                'balance': balance,
                'lastActivity': lastActivity,
                'typeHash': typeHash,
                'codeHash': codeHash,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'includeStorage': includeStorage,
            },
        });
    }
    /**
     * Get contracts count
     * Returns a number of contract accounts.
     * @returns number
     * @throws ApiError
     */
    contractsGetCount({ kind, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/count',
            query: {
                'kind': kind,
            },
        });
    }
    /**
     * Get contract by address
     * Returns a contract account with the specified address.
     * @returns Contract
     * @throws ApiError
     */
    contractsGetByAddress({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get same contracts
     * Returns contracts which have the same script as the specified one.
     * Note, contract scripts are compared by 32-bit hash, so in very rare cases there may be collisions.
     * @returns Contract
     * @throws ApiError
     */
    contractsGetSame({ address, select, sort, offset, limit = 100, includeStorage = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/same',
            path: {
                'address': address,
            },
            query: {
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'includeStorage': includeStorage,
            },
        });
    }
    /**
     * Get similar contracts
     * Returns contracts which have the same interface (parameter and storage types) as the specified one.
     * Note, contract parameter and storage types are compared by 32-bit hash, so in very rare cases there may be collisions.
     * @returns Contract
     * @throws ApiError
     */
    contractsGetSimilar({ address, select, sort, offset, limit = 100, includeStorage = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/similar',
            path: {
                'address': address,
            },
            query: {
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'includeStorage': includeStorage,
            },
        });
    }
    /**
     * Get contract code
     * Returns a code of the specified contract.
     * @returns binary
     * @throws ApiError
     */
    contractsGetCode({ address, level, format, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/code',
            path: {
                'address': address,
            },
            query: {
                'level': level,
                'format': format,
            },
        });
    }
    /**
     * Get JSON Schema [2020-12] interface for the contract
     * Returns standard JSON Schema for contract storage, entrypoints, and Big_map entries.
     * @returns ContractInterface
     * @throws ApiError
     */
    contractsGetInterface({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/interface',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get contract entrypoints
     * Returns entrypoints of the specified contract.
     * @returns Entrypoint
     * @throws ApiError
     */
    contractsGetEntrypoints({ address, all = false, json = true, micheline = false, michelson = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/entrypoints',
            path: {
                'address': address,
            },
            query: {
                'all': all,
                'json': json,
                'micheline': micheline,
                'michelson': michelson,
            },
        });
    }
    /**
     * Get entrypoint by name
     * Returns contract's entrypoint with specified name.
     * @returns Entrypoint
     * @throws ApiError
     */
    contractsGetEntrypointByName({ address, name, json = true, micheline = false, michelson = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/entrypoints/{name}',
            path: {
                'address': address,
                'name': name,
            },
            query: {
                'json': json,
                'micheline': micheline,
                'michelson': michelson,
            },
        });
    }
    /**
     * Get contract views
     * Returns all views of the specified contract.
     * @returns ContractView
     * @throws ApiError
     */
    contractsGetContractViews({ address, json = true, micheline = false, michelson = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/views',
            path: {
                'address': address,
            },
            query: {
                'json': json,
                'micheline': micheline,
                'michelson': michelson,
            },
        });
    }
    /**
     * Get view by name
     * Returns contract view with specified name.
     * @returns ContractView
     * @throws ApiError
     */
    contractsGetContractViewByName({ address, name, json = true, micheline = false, michelson = false, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/views/{name}',
            path: {
                'address': address,
                'name': name,
            },
            query: {
                'json': json,
                'micheline': micheline,
                'michelson': michelson,
            },
        });
    }
    /**
     * Build entrypoint parameters
     * Returns micheline parameters converted from its JSON representation.
     * @returns binary
     * @throws ApiError
     */
    contractsBuildEntrypointParametersGet({ address, name, value, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/entrypoints/{name}/build',
            path: {
                'address': address,
                'name': name,
            },
            query: {
                'value': value,
            },
        });
    }
    /**
     * Build entrypoint parameters
     * Returns micheline parameters converted from its JSON representation.
     * @returns binary
     * @throws ApiError
     */
    contractsBuildEntrypointParametersPost({ address, name, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/contracts/{address}/entrypoints/{name}/build',
            path: {
                'address': address,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get contract storage
     * Returns contract storage value in JSON format.
     * @returns binary
     * @throws ApiError
     */
    contractsGetStorage({ address, level, path, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/storage',
            path: {
                'address': address,
            },
            query: {
                'level': level,
                'path': path,
            },
        });
    }
    /**
     * Get contract storage schema
     * Returns JSON schema of the contract storage.
     * @returns binary
     * @throws ApiError
     */
    contractsGetStorageSchema({ address, level, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/storage/schema',
            path: {
                'address': address,
            },
            query: {
                'level': level,
            },
        });
    }
    /**
     * Get contract storage history
     * Returns contract storage historical values.
     * @returns StorageRecord
     * @throws ApiError
     */
    contractsGetStorageHistory({ address, lastId, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/storage/history',
            path: {
                'address': address,
            },
            query: {
                'lastId': lastId,
                'limit': limit,
            },
        });
    }
    /**
     * Get raw contract storage
     * Returns raw contract storage value in micheline format.
     * @returns IMicheline
     * @throws ApiError
     */
    contractsGetRawStorage({ address, level, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/storage/raw',
            path: {
                'address': address,
            },
            query: {
                'level': level,
            },
        });
    }
    /**
     * Get raw contract storage schema
     * Returns micheline schema (type) of the contract storage.
     * @returns IMicheline
     * @throws ApiError
     */
    contractsGetRawStorageSchema({ address, level, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/storage/raw/schema',
            path: {
                'address': address,
            },
            query: {
                'level': level,
            },
        });
    }
    /**
     * Get raw contract storage history
     * Returns raw contract storage historical values.
     * @returns StorageRecord
     * @throws ApiError
     */
    contractsGetRawStorageHistory({ address, lastId, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/storage/raw/history',
            path: {
                'address': address,
            },
            query: {
                'lastId': lastId,
                'limit': limit,
            },
        });
    }
    /**
     * Get contract bigmaps
     * Returns all active bigmaps allocated in the contract storage.
     * @returns BigMap
     * @throws ApiError
     */
    contractsGetBigMaps({ address, tags, select, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps',
            path: {
                'address': address,
            },
            query: {
                'tags': tags,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
            },
        });
    }
    /**
     * Get bigmap by name
     * Returns contract bigmap with the specified name or storage path.
     * @returns BigMap
     * @throws ApiError
     */
    contractsGetBigMapByName({ address, name, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps/{name}',
            path: {
                'address': address,
                'name': name,
            },
            query: {
                'micheline': micheline,
            },
        });
    }
    /**
     * Get bigmap keys
     * Returns keys of a contract bigmap with the specified name.
     * @returns BigMapKey
     * @throws ApiError
     */
    contractsGetBigMapByNameKeys({ address, name, active, key, value, lastLevel, select, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps/{name}/keys',
            path: {
                'address': address,
                'name': name,
            },
            query: {
                'active': active,
                'key': key,
                'value': value,
                'lastLevel': lastLevel,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
            },
        });
    }
    /**
     * Get bigmap key
     * Returns the specified bigmap key.
     * @returns BigMapKey
     * @throws ApiError
     */
    contractsGetKey({ address, name, key, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps/{name}/keys/{key}',
            path: {
                'address': address,
                'name': name,
                'key': key,
            },
            query: {
                'micheline': micheline,
            },
        });
    }
    /**
     * Get bigmap key updates
     * Returns updates history for the specified bigmap key.
     * @returns BigMapKeyUpdate
     * @throws ApiError
     */
    contractsGetKeyUpdates({ address, name, key, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps/{name}/keys/{key}/updates',
            path: {
                'address': address,
                'name': name,
                'key': key,
            },
            query: {
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
            },
        });
    }
    /**
     * Get historical keys
     * Returns a list of bigmap keys at the specific block.
     * @returns BigMapKeyHistorical
     * @throws ApiError
     */
    contractsGetHistoricalKeys({ address, name, level, active, key, value, select, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps/{name}/historical_keys/{level}',
            path: {
                'address': address,
                'name': name,
                'level': level,
            },
            query: {
                'active': active,
                'key': key,
                'value': value,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
            },
        });
    }
    /**
     * Get historical key
     * Returns the specified bigmap key at the specific block.
     * @returns BigMapKeyHistorical
     * @throws ApiError
     */
    contractsGetKey2({ address, name, level, key, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/contracts/{address}/bigmaps/{name}/historical_keys/{level}/{key}',
            path: {
                'address': address,
                'name': name,
                'level': level,
                'key': key,
            },
            query: {
                'micheline': micheline,
            },
        });
    }
}
//# sourceMappingURL=ContractsService.js.map