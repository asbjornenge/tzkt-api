import type { BakerRewards } from '../models/BakerRewards.js';
import type { DelegatorRewards } from '../models/DelegatorRewards.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { RewardSplit } from '../models/RewardSplit.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { SplitDelegator } from '../models/SplitDelegator.js';
import type { Symbols } from '../models/Symbols.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class RewardsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get baker cycle rewards count
     * Returns total number of cycles where the baker was active
     * @returns number
     * @throws ApiError
     */
    rewardsGetBakerRewardsCount({ address, }: {
        /** Baker address **/
        address: string | null;
    }): CancelablePromise<number>;
    /**
     * Get baker cycle rewards
     * Returns a list of baker rewards for every cycle, including future cycles.
     * @returns BakerRewards
     * @throws ApiError
     */
    rewardsGetBakerRewards({ address, cycle, select, sort, offset, limit, quote, }: {
        /** Baker address. **/
        address: string | null;
        /** Filters rewards by cycle. **/
        cycle?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts cycle rewards by specified field. Supported fields: `cycle` (default, desc). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<BakerRewards>>;
    /**
     * Get baker cycle rewards by cycle
     * Returns baker cycle rewards for the specified cycle.
     * @returns BakerRewards
     * @throws ApiError
     */
    rewardsGetBakerRewardsByCycle({ address, cycle, quote, }: {
        /** Baker address **/
        address: string | null;
        /** Rewards cycle **/
        cycle: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<BakerRewards>;
    /**
     * Get delegator cycle rewards count
     * Returns total number of cycles where the delegator was delegated to an active baker
     * @returns number
     * @throws ApiError
     */
    rewardsGetDelegatorRewardsCount({ address, }: {
        /** Delegator address **/
        address: string | null;
    }): CancelablePromise<number>;
    /**
     * Get delegator cycle rewards
     * Returns a list of delegator rewards for every cycle, including future cycles.
     * @returns DelegatorRewards
     * @throws ApiError
     */
    rewardsGetDelegatorRewards({ address, cycle, select, sort, offset, limit, quote, }: {
        /** Delegator address. **/
        address: string | null;
        /** Filters rewards by cycle. **/
        cycle?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts cycle rewards by specified field. Supported fields: `cycle` (default, desc). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<DelegatorRewards>>;
    /**
     * Get delegator cycle rewards by cycle
     * Returns delegator cycle rewards for the specified cycle.
     * @returns DelegatorRewards
     * @throws ApiError
     */
    rewardsGetDelegatorRewardsByCycle({ address, cycle, quote, }: {
        /** Delegator address **/
        address: string | null;
        /** Rewards cycle **/
        cycle: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<DelegatorRewards>;
    /**
     * Get reward split
     * Returns baker rewards for the specified cycle with all delegator balances at that cycle to allow rewards distribution in proportion to shares.
     * @returns RewardSplit
     * @throws ApiError
     */
    rewardsGetRewardSplit({ baker, cycle, offset, limit, }: {
        /** Baker address **/
        baker: string | null;
        /** Rewards cycle **/
        cycle: number;
        /** Specifies how many delegators in the reward split should be skipped **/
        offset?: number;
        /** Maximum number of delegators to return **/
        limit?: number;
    }): CancelablePromise<RewardSplit>;
    /**
     * Get reward split delegator
     * Returns delegator from the reward split for the specified cycle.
     * @returns SplitDelegator
     * @throws ApiError
     */
    rewardsGetRewardSplitDelegator({ baker, cycle, delegator, }: {
        /** Baker address **/
        baker: string | null;
        /** Reward split cycle **/
        cycle: number;
        /** Delegator address **/
        delegator: string | null;
    }): CancelablePromise<SplitDelegator>;
}
