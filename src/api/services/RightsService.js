export class RightsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get rights count
     * Returns the total number of stored rights.
     * @returns number
     * @throws ApiError
     */
    rightsGetCount({ type, baker, cycle, level, slots, priority, status, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rights/count',
            query: {
                'type': type,
                'baker': baker,
                'cycle': cycle,
                'level': level,
                'slots': slots,
                'priority': priority,
                'status': status,
            },
        });
    }
    /**
     * Get rights
     * Returns a list of rights.
     * @returns BakingRight
     * @throws ApiError
     */
    rightsGet({ type, baker, cycle, level, slots, priority, status, select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rights',
            query: {
                'type': type,
                'baker': baker,
                'cycle': cycle,
                'level': level,
                'slots': slots,
                'priority': priority,
                'status': status,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
}
//# sourceMappingURL=RightsService.js.map