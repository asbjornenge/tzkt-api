import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { Software } from '../models/Software.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class SoftwareService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get baker software
     * Returns a list of baker software.
     * @returns Software
     * @throws ApiError
     */
    softwareGet({ select, sort, offset, limit, }: {
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `firstLevel`, `lastLevel`, `blocksCount`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Software>>;
    /**
     * Get software count
     * Returns a number of software.
     * @returns number
     * @throws ApiError
     */
    softwareGetCount(): CancelablePromise<number>;
}
