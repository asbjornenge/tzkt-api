export class CyclesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get cycles count
     * Returns the total number of cycles, including future cycles.
     * @returns number
     * @throws ApiError
     */
    cyclesGetCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/cycles/count',
        });
    }
    /**
     * Get cycles
     * Returns a list of cycles, including future cycles.
     * @returns Cycle
     * @throws ApiError
     */
    cyclesGet({ snapshotIndex, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/cycles',
            query: {
                'snapshotIndex': snapshotIndex,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get cycle by index
     * Returns a cycle at the specified index.
     * @returns Cycle
     * @throws ApiError
     */
    cyclesGetByIndex({ index, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/cycles/{index}',
            path: {
                'index': index,
            },
            query: {
                'quote': quote,
            },
        });
    }
}
//# sourceMappingURL=CyclesService.js.map