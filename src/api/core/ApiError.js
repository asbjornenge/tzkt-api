export class ApiError extends Error {
    url;
    status;
    statusText;
    body;
    constructor(response, message) {
        super(message);
        this.name = 'ApiError';
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.body;
    }
}
//# sourceMappingURL=ApiError.js.map