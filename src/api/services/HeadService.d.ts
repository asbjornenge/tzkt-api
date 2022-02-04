import type { State } from '../models/State.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class HeadService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get indexer head
     * Returns indexer head and synchronization status.
     * @returns State
     * @throws ApiError
     */
    headGet(): CancelablePromise<State>;
}
