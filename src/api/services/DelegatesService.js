export class DelegatesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get delegates
     * Returns a list of delegate accounts.
     * @returns Delegate
     * @throws ApiError
     */
    delegatesGet({ active, lastActivity, select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/delegates',
            query: {
                'active': active,
                'lastActivity': lastActivity,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get delegates count
     * Returns a number of delegate accounts.
     * @returns number
     * @throws ApiError
     */
    delegatesGetCount({ active, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/delegates/count',
            query: {
                'active': active,
            },
        });
    }
    /**
     * Get delegate by address
     * Returns a delegate with the specified address.
     * @returns Delegate
     * @throws ApiError
     */
    delegatesGetByAddress({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/delegates/{address}',
            path: {
                'address': address,
            },
        });
    }
}
//# sourceMappingURL=DelegatesService.js.map