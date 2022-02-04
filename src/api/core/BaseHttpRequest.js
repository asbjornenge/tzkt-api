export class BaseHttpRequest {
    config;
    constructor(config) {
        this.config = config;
    }
    request(options) {
        throw new Error('Not Implemented');
    }
}
//# sourceMappingURL=BaseHttpRequest.js.map