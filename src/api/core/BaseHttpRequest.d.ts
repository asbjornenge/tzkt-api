import type { ApiRequestOptions } from './ApiRequestOptions.js';
import type { CancelablePromise } from './CancelablePromise.js';
import type { OpenAPIConfig } from './OpenAPI.js';
export declare class BaseHttpRequest {
    protected readonly config: OpenAPIConfig;
    constructor(config: OpenAPIConfig);
    request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
