export class CommitmentsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get commitment by blinded address
     * Returns a commitment with the specified blinded address.
     * @returns Commitment
     * @throws ApiError
     */
    commitmentsGet({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/commitments/{address}',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get commitments
     * Returns a list of commitments.
     * @returns Commitment
     * @throws ApiError
     */
    commitmentsGetAll({ activated, activationLevel, balance, select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/commitments',
            query: {
                'activated': activated,
                'activationLevel': activationLevel,
                'balance': balance,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get commitments count
     * Returns a number of commitments.
     * @returns number
     * @throws ApiError
     */
    commitmentsGetCount({ activated, balance, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/commitments/count',
            query: {
                'activated': activated,
                'balance': balance,
            },
        });
    }
}
//# sourceMappingURL=CommitmentsService.js.map