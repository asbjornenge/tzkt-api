import type { Cycle } from '../models/Cycle.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { Symbols } from '../models/Symbols.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class CyclesService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get cycles count
     * Returns the total number of cycles, including future cycles.
     * @returns number
     * @throws ApiError
     */
    cyclesGetCount(): CancelablePromise<number>;
    /**
     * Get cycles
     * Returns a list of cycles, including future cycles.
     * @returns Cycle
     * @throws ApiError
     */
    cyclesGet({ snapshotIndex, select, sort, offset, limit, quote, }: {
        /** Filters cycles by snapshot index (0..15) **/
        snapshotIndex?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts cycles by specified field. Supported fields: `index` (default, desc). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Cycle>>;
    /**
     * Get cycle by index
     * Returns a cycle at the specified index.
     * @returns Cycle
     * @throws ApiError
     */
    cyclesGetByIndex({ index, quote, }: {
        /** Cycle index starting from zero **/
        index: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Cycle>;
}
