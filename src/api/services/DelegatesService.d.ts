import type { BoolParameter } from '../models/BoolParameter.js';
import type { Delegate } from '../models/Delegate.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class DelegatesService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get delegates
     * Returns a list of delegate accounts.
     * @returns Delegate
     * @throws ApiError
     */
    delegatesGet({ active, lastActivity, select, sort, offset, limit, }: {
        /** Delegate status to filter by (true - only active, false - only deactivated, undefined - all delegates) **/
        active?: BoolParameter | null;
        /** Filters delegates by last activity level (where the delegate was updated) **/
        lastActivity?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `activationLevel`, `deactivationLevel`, `stakingBalance`, `balance`, `numDelegators`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Delegate>>;
    /**
     * Get delegates count
     * Returns a number of delegate accounts.
     * @returns number
     * @throws ApiError
     */
    delegatesGetCount({ active, }: {
        /** Delegate status to filter by (true - only active, false - only deactivated, undefined - all delegates) **/
        active?: BoolParameter | null;
    }): CancelablePromise<number>;
    /**
     * Get delegate by address
     * Returns a delegate with the specified address.
     * @returns Delegate
     * @throws ApiError
     */
    delegatesGetByAddress({ address, }: {
        /** Delegate address (starting with tz) **/
        address: string | null;
    }): CancelablePromise<Delegate>;
}
