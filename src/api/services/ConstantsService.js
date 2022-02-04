export class ConstantsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get global constants
     * Returns a list of global constants.
     * @returns Constant
     * @throws ApiError
     */
    constantsGet({ address, creationLevel, creationTime, creator, refs, size, select, sort, offset, limit = 100, format, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/constants',
            query: {
                'address': address,
                'creationLevel': creationLevel,
                'creationTime': creationTime,
                'creator': creator,
                'refs': refs,
                'size': size,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'format': format,
            },
        });
    }
    /**
     * Get global constant by address
     * Returns global constant with specified address (expression hash).
     * @returns Constant
     * @throws ApiError
     */
    constantsGetByAddress({ address, format, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/constants/{address}',
            path: {
                'address': address,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * Get global constants count
     * Returns a number of global constants.
     * @returns number
     * @throws ApiError
     */
    constantsGetCount({ refs, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/constants/count',
            query: {
                'refs': refs,
            },
        });
    }
}
//# sourceMappingURL=ConstantsService.js.map