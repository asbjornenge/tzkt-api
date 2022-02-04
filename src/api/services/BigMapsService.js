export class BigMapsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get bigmaps count
     * Returns the total number of bigmaps.
     * @returns number
     * @throws ApiError
     */
    bigMapsGetBigMapsCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/count',
        });
    }
    /**
     * Get bigmaps
     * Returns a list of bigmaps.
     * @returns BigMap
     * @throws ApiError
     */
    bigMapsGetBigMaps({ contract, path, tags, active, lastLevel, select, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps',
            query: {
                'contract': contract,
                'path': path,
                'tags': tags,
                'active': active,
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
     * Get bigmap updates
     * Returns a list of all bigmap updates.
     * @returns BigMapUpdate
     * @throws ApiError
     */
    bigMapsGetBigMapUpdates({ bigmap, path, contract, tags, action, value, level, timestamp, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/updates',
            query: {
                'bigmap': bigmap,
                'path': path,
                'contract': contract,
                'tags': tags,
                'action': action,
                'value': value,
                'level': level,
                'timestamp': timestamp,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'micheline': micheline,
            },
        });
    }
    /**
     * Get bigmap by Id
     * Returns a bigmap with the specified Id.
     * @returns BigMap
     * @throws ApiError
     */
    bigMapsGetBigMapById({ id, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}',
            path: {
                'id': id,
            },
            query: {
                'micheline': micheline,
            },
        });
    }
    /**
     * Get bigmap type
     * Returns a type of the bigmap with the specified Id in Micheline format (with annotations).
     * @returns MichelinePrim
     * @throws ApiError
     */
    bigMapsGetBigMapType({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}/type',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get bigmap keys
     * Returns a list of bigmap keys.
     * @returns BigMapKey
     * @throws ApiError
     */
    bigMapsGetKeys({ id, active, key, value, lastLevel, select, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}/keys',
            path: {
                'id': id,
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
    bigMapsGetKey({ id, key, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}/keys/{key}',
            path: {
                'id': id,
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
    bigMapsGetKeyUpdates({ id, key, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}/keys/{key}/updates',
            path: {
                'id': id,
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
    bigMapsGetHistoricalKeys({ id, level, active, key, value, select, sort, offset, limit = 100, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}/historical_keys/{level}',
            path: {
                'id': id,
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
    bigMapsGetKey2({ id, level, key, micheline, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/bigmaps/{id}/historical_keys/{level}/{key}',
            path: {
                'id': id,
                'level': level,
                'key': key,
            },
            query: {
                'micheline': micheline,
            },
        });
    }
}
//# sourceMappingURL=BigMapsService.js.map