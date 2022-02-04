export class ProtocolsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get protocols count
     * Returns the total number of protocols.
     * @returns number
     * @throws ApiError
     */
    protocolsGetCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/protocols/count',
        });
    }
    /**
     * Get protocols
     * Returns a list of protocols.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGet({ sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/protocols',
            query: {
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get current protocol
     * Returns current protocol.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetCurrent() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/protocols/current',
        });
    }
    /**
     * Get protocol by code
     * Returns a protocol with the specified proto code.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetByCode({ code, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/protocols/{code}',
            path: {
                'code': code,
            },
        });
    }
    /**
     * Get protocol by hash
     * Returns a protocol with the specified hash.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetByHash({ hash, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/protocols/{hash}',
            path: {
                'hash': hash,
            },
        });
    }
    /**
     * Get protocol by cycle
     * Returns a protocol at the specified cycle.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetByCycle({ cycle, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/protocols/cycles/{cycle}',
            path: {
                'cycle': cycle,
            },
        });
    }
}
//# sourceMappingURL=ProtocolsService.js.map