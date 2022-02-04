import type { Commitment } from '../models/Commitment.js';
import type { Int32NullParameter } from '../models/Int32NullParameter.js';
import type { Int64Parameter } from '../models/Int64Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class CommitmentsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get commitment by blinded address
     * Returns a commitment with the specified blinded address.
     * @returns Commitment
     * @throws ApiError
     */
    commitmentsGet({ address, }: {
        /** Blinded address (starting with btz) **/
        address: string | null;
    }): CancelablePromise<Commitment>;
    /**
     * Get commitments
     * Returns a list of commitments.
     * @returns Commitment
     * @throws ApiError
     */
    commitmentsGetAll({ activated, activationLevel, balance, select, sort, offset, limit, }: {
        /** Filters commitments by activation status **/
        activated?: boolean | null;
        /** Filters commitments by activation level **/
        activationLevel?: Int32NullParameter | null;
        /** Filters commitments by activated balance **/
        balance?: Int64Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts delegators by specified field. Supported fields: `id` (default), `balance`, `activationLevel`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Commitment>>;
    /**
     * Get commitments count
     * Returns a number of commitments.
     * @returns number
     * @throws ApiError
     */
    commitmentsGetCount({ activated, balance, }: {
        /** Filters commitments by activation status **/
        activated?: boolean | null;
        /** Filters commitments by activated balance **/
        balance?: Int64Parameter | null;
    }): CancelablePromise<number>;
}
