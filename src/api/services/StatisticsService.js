export class StatisticsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get statistics
     * Returns a list of end-of-block statistics.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGet({ level, timestamp, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/statistics',
            query: {
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
     * Get daily statistics
     * Returns a list of end-of-day statistics.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGetDaily({ date, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/statistics/daily',
            query: {
                'date': date,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get cyclic statistics
     * Returns a list of end-of-cycle statistics.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGetCyclesAll({ cycle, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/statistics/cyclic',
            query: {
                'cycle': cycle,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get current statistics
     * Returns statistics at the end of a head block.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGetCycles({ select, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/statistics/current',
            query: {
                'select': select,
                'quote': quote,
            },
        });
    }
}
//# sourceMappingURL=StatisticsService.js.map