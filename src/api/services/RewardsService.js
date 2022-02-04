export class RewardsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get baker cycle rewards count
     * Returns total number of cycles where the baker was active
     * @returns number
     * @throws ApiError
     */
    rewardsGetBakerRewardsCount({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/bakers/{address}/count',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get baker cycle rewards
     * Returns a list of baker rewards for every cycle, including future cycles.
     * @returns BakerRewards
     * @throws ApiError
     */
    rewardsGetBakerRewards({ address, cycle, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/bakers/{address}',
            path: {
                'address': address,
            },
            query: {
                'cycle': cycle,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get baker cycle rewards by cycle
     * Returns baker cycle rewards for the specified cycle.
     * @returns BakerRewards
     * @throws ApiError
     */
    rewardsGetBakerRewardsByCycle({ address, cycle, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/bakers/{address}/{cycle}',
            path: {
                'address': address,
                'cycle': cycle,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get delegator cycle rewards count
     * Returns total number of cycles where the delegator was delegated to an active baker
     * @returns number
     * @throws ApiError
     */
    rewardsGetDelegatorRewardsCount({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/delegators/{address}/count',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get delegator cycle rewards
     * Returns a list of delegator rewards for every cycle, including future cycles.
     * @returns DelegatorRewards
     * @throws ApiError
     */
    rewardsGetDelegatorRewards({ address, cycle, select, sort, offset, limit = 100, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/delegators/{address}',
            path: {
                'address': address,
            },
            query: {
                'cycle': cycle,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
                'quote': quote,
            },
        });
    }
    /**
     * Get delegator cycle rewards by cycle
     * Returns delegator cycle rewards for the specified cycle.
     * @returns DelegatorRewards
     * @throws ApiError
     */
    rewardsGetDelegatorRewardsByCycle({ address, cycle, quote, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/delegators/{address}/{cycle}',
            path: {
                'address': address,
                'cycle': cycle,
            },
            query: {
                'quote': quote,
            },
        });
    }
    /**
     * Get reward split
     * Returns baker rewards for the specified cycle with all delegator balances at that cycle to allow rewards distribution in proportion to shares.
     * @returns RewardSplit
     * @throws ApiError
     */
    rewardsGetRewardSplit({ baker, cycle, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/split/{baker}/{cycle}',
            path: {
                'baker': baker,
                'cycle': cycle,
            },
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get reward split delegator
     * Returns delegator from the reward split for the specified cycle.
     * @returns SplitDelegator
     * @throws ApiError
     */
    rewardsGetRewardSplitDelegator({ baker, cycle, delegator, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/rewards/split/{baker}/{cycle}/{delegator}',
            path: {
                'baker': baker,
                'cycle': cycle,
                'delegator': delegator,
            },
        });
    }
}
//# sourceMappingURL=RewardsService.js.map