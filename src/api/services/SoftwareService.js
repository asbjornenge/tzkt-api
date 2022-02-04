export class SoftwareService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get baker software
     * Returns a list of baker software.
     * @returns Software
     * @throws ApiError
     */
    softwareGet({ select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/software',
            query: {
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get software count
     * Returns a number of software.
     * @returns number
     * @throws ApiError
     */
    softwareGetCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/software/count',
        });
    }
}
//# sourceMappingURL=SoftwareService.js.map