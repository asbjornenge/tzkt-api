export class QuotesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get quotes count
     * Returns the total number of quotes aligned with blocks.
     * @returns number
     * @throws ApiError
     */
    quotesGetCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/quotes/count',
        });
    }
    /**
     * Get last quote
     * Returns last known quote.
     * @returns Quote
     * @throws ApiError
     */
    quotesGetLast() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/quotes/last',
        });
    }
    /**
     * Get quotes
     * Returns a list of quotes aligned with blocks.
     * @returns Quote
     * @throws ApiError
     */
    quotesGet({ level, timestamp, select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/quotes',
            query: {
                'level': level,
                'timestamp': timestamp,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
}
//# sourceMappingURL=QuotesService.js.map