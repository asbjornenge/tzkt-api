import type { DateTimeParameter } from '../models/DateTimeParameter.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { Statistics } from '../models/Statistics.js';
import type { Symbols } from '../models/Symbols.js';
import type { TimestampParameter } from '../models/TimestampParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class StatisticsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get statistics
     * Returns a list of end-of-block statistics.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGet({ level, timestamp, select, sort, offset, limit, quote, }: {
        /** Filters statistics by level. **/
        level?: Int32Parameter | null;
        /** Filters statistics by timestamp. **/
        timestamp?: TimestampParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `level`, `cycle`, `date`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Statistics>>;
    /**
     * Get daily statistics
     * Returns a list of end-of-day statistics.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGetDaily({ date, select, sort, offset, limit, quote, }: {
        /** Filters statistics by date. **/
        date?: DateTimeParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `level`, `cycle`, `date`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Statistics>>;
    /**
     * Get cyclic statistics
     * Returns a list of end-of-cycle statistics.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGetCyclesAll({ cycle, select, sort, offset, limit, quote, }: {
        /** Filters statistics by cycle. **/
        cycle?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `level`, `cycle`, `date`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Statistics>>;
    /**
     * Get current statistics
     * Returns statistics at the end of a head block.
     * @returns Statistics
     * @throws ApiError
     */
    statisticsGetCycles({ select, quote, }: {
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Statistics>;
}
