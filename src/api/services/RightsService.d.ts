import type { AccountParameter } from '../models/AccountParameter.js';
import type { BakingRight } from '../models/BakingRight.js';
import type { BakingRightStatusParameter } from '../models/BakingRightStatusParameter.js';
import type { BakingRightTypeParameter } from '../models/BakingRightTypeParameter.js';
import type { Int32NullParameter } from '../models/Int32NullParameter.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class RightsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get rights count
     * Returns the total number of stored rights.
     * @returns number
     * @throws ApiError
     */
    rightsGetCount({ type, baker, cycle, level, slots, priority, status, }: {
        /** Filters rights by type (`baking`, `endorsing`) **/
        type?: BakingRightTypeParameter | null;
        /** Filters rights by baker **/
        baker?: AccountParameter | null;
        /** Filters rights by cycle **/
        cycle?: Int32Parameter | null;
        /** Filters rights by level **/
        level?: Int32Parameter | null;
        /** Filters rights by slots **/
        slots?: Int32NullParameter | null;
        /** Filters rights by priority **/
        priority?: Int32NullParameter | null;
        /** Filters rights by status (`future`, `realized`, `uncovered`, `missed`) **/
        status?: BakingRightStatusParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get rights
     * Returns a list of rights.
     * @returns BakingRight
     * @throws ApiError
     */
    rightsGet({ type, baker, cycle, level, slots, priority, status, select, sort, offset, limit, }: {
        /** Filters rights by type (`baking`, `endorsing`) **/
        type?: BakingRightTypeParameter | null;
        /** Filters rights by baker **/
        baker?: AccountParameter | null;
        /** Filters rights by cycle **/
        cycle?: Int32Parameter | null;
        /** Filters rights by level **/
        level?: Int32Parameter | null;
        /** Filters rights by slots **/
        slots?: Int32NullParameter | null;
        /** Filters rights by priority **/
        priority?: Int32NullParameter | null;
        /** Filters rights by status (`future`, `realized`, `uncovered`, `missed`) **/
        status?: BakingRightStatusParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts rights by specified field. Supported fields: `level` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<BakingRight>>;
}
