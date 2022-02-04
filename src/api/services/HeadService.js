export class HeadService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get indexer head
     * Returns indexer head and synchronization status.
     * @returns State
     * @throws ApiError
     */
    headGet() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/head',
        });
    }
}
//# sourceMappingURL=HeadService.js.map