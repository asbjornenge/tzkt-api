import type { DateTimeParameter } from '../models/DateTimeParameter.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { Quote } from '../models/Quote.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class QuotesService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get quotes count
     * Returns the total number of quotes aligned with blocks.
     * @returns number
     * @throws ApiError
     */
    quotesGetCount(): CancelablePromise<number>;
    /**
     * Get last quote
     * Returns last known quote.
     * @returns Quote
     * @throws ApiError
     */
    quotesGetLast(): CancelablePromise<Quote>;
    /**
     * Get quotes
     * Returns a list of quotes aligned with blocks.
     * @returns Quote
     * @throws ApiError
     */
    quotesGet({ level, timestamp, select, sort, offset, limit, }: {
        /** Filters quotes by level. **/
        level?: Int32Parameter | null;
        /** Filters quotes by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts quotes by specified field. Supported fields: `level` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Quote>>;
}
