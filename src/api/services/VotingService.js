export class VotingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get proposals count
     * Returns the total number of protocol proposals.
     * @returns number
     * @throws ApiError
     */
    votingGetProposalsCount() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/proposals/count',
        });
    }
    /**
     * Get proposals
     * Returns a list of protocol proposals.
     * @returns Proposal
     * @throws ApiError
     */
    votingGetProposals({ hash, epoch, select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/proposals',
            query: {
                'hash': hash,
                'epoch': epoch,
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get proposal by hash
     * Returns the most recent protocol proposal with the specified hash.
     * @returns Proposal
     * @throws ApiError
     */
    votingGetProposalByHash({ hash, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/proposals/{hash}',
            path: {
                'hash': hash,
            },
        });
    }
    /**
     * Get voting periods
     * Returns a list of voting periods.
     * @returns VotingPeriod
     * @throws ApiError
     */
    votingGetPeriods({ select, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods',
            query: {
                'select': select,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get voting period by index
     * Returns a voting period at the specified index.
     * @returns VotingPeriod
     * @throws ApiError
     */
    votingGetPeriod({ index, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods/{index}',
            path: {
                'index': index,
            },
        });
    }
    /**
     * Get current voting period
     * Returns current voting period.
     * @returns VotingPeriod
     * @throws ApiError
     */
    votingGetCurrentPeriod() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods/current',
        });
    }
    /**
     * Get period voters
     * Returns voters from the voting period at the specified index.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoters({ index, status, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods/{index}/voters',
            path: {
                'index': index,
            },
            query: {
                'status': status,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get period voter
     * Returns a voter with the specified address from the voting period at the specified index.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoter({ index, address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods/{index}/voters/{address}',
            path: {
                'index': index,
                'address': address,
            },
        });
    }
    /**
     * Get current period voters
     * Returns voters from the current period.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoters2({ status, sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods/current/voters',
            query: {
                'status': status,
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get current period voter
     * Returns a voter with the specified address from the current period.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoter2({ address, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/periods/current/voters/{address}',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get voting epochs
     * Returns a list of voting epochs.
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetEpochs({ sort, offset, limit = 100, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/epochs',
            query: {
                'sort': sort,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get voting epoch by index
     * Returns a voting epoch at the specified index.
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetEpoch({ index, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/epochs/{index}',
            path: {
                'index': index,
            },
        });
    }
    /**
     * Get current voting epoch
     * Returns the current voting epoch
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetCurrentEpoch() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/epochs/current',
        });
    }
    /**
     * Get latest voting
     * Returns the latest epoch with at least one proposal
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetLatestVoting() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/voting/epochs/latest_voting',
        });
    }
}
//# sourceMappingURL=VotingService.js.map