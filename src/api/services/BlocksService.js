export class BlocksService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get blocks count
     * Returns the total number of blocks.
     * @returns number
     * @throws ApiError
     */
    blocksGetCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/blocks/count',
        });
    }
    /**
     * Get blocks
     * Returns a list of blocks.
     * @returns Block
     * @throws ApiError
     */
    blocksGet({ baker, level, timestamp, priority, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/blocks',
            query: {
                'baker': baker,
                'level': level,
                'timestamp': timestamp,
                'priority': priority,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get block by hash
     * Returns a block with the specified hash.
     * @returns Block
     * @throws ApiError
     */
    blocksGetByHash({ hash, operations = false, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/blocks/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'operations': operations,
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
    /**
     * Get block by level
     * Returns a block at the specified level.
     * @returns Block
     * @throws ApiError
     */
    blocksGetByLevel({ level, operations = false, micheline, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/blocks/{level}',
            path: {
                'level': level,
            },
            query: {
                'operations': operations,
                'micheline': micheline,
                'quote': quote,
            },
        });
    }
}
//# sourceMappingURL=BlocksService.js.map