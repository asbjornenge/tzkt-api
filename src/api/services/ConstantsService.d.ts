import type { AccountParameter } from '../models/AccountParameter.js';
import type { Constant } from '../models/Constant.js';
import type { ExpressionParameter } from '../models/ExpressionParameter.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { TimestampParameter } from '../models/TimestampParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class ConstantsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get global constants
     * Returns a list of global constants.
     * @returns Constant
     * @throws ApiError
     */
    constantsGet({ address, creationLevel, creationTime, creator, refs, size, select, sort, offset, limit, format, }: {
        /** Filters constants by global address (starts with `expr..`). **/
        address?: ExpressionParameter | null;
        /** Filters constants by creation level. **/
        creationLevel?: Int32Parameter | null;
        /** Filters constants by creation time. **/
        creationTime?: TimestampParameter | null;
        /** Filters constants by creator. **/
        creator?: AccountParameter | null;
        /** Filters constants by number of refs. **/
        refs?: Int32Parameter | null;
        /** Filters constants by size in bytes. **/
        size?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `creationLevel`, `size`, `refs`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Constant value format (`0` - micheline, `1` - michelson, `2` - bytes (base64)) **/
        format?: number;
    }): CancelablePromise<Array<Constant>>;
    /**
     * Get global constant by address
     * Returns global constant with specified address (expression hash).
     * @returns Constant
     * @throws ApiError
     */
    constantsGetByAddress({ address, format, }: {
        /** Global address (starts with `expr..`) **/
        address: string | null;
        /** Constant value format (`0` - micheline, `1` - michelson, `2` - bytes (base64)) **/
        format?: number;
    }): CancelablePromise<Constant>;
    /**
     * Get global constants count
     * Returns a number of global constants.
     * @returns number
     * @throws ApiError
     */
    constantsGetCount({ refs, }: {
        /** Filters constants by number of refs. **/
        refs?: Int32Parameter | null;
    }): CancelablePromise<number>;
}
