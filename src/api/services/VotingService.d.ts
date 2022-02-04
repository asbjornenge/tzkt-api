import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { Proposal } from '../models/Proposal.js';
import type { ProtocolParameter } from '../models/ProtocolParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { VoterSnapshot } from '../models/VoterSnapshot.js';
import type { VoterStatusParameter } from '../models/VoterStatusParameter.js';
import type { VotingEpoch } from '../models/VotingEpoch.js';
import type { VotingPeriod } from '../models/VotingPeriod.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class VotingService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get proposals count
     * Returns the total number of protocol proposals.
     * @returns number
     * @throws ApiError
     */
    votingGetProposalsCount(): CancelablePromise<number>;
    /**
     * Get proposals
     * Returns a list of protocol proposals.
     * @returns Proposal
     * @throws ApiError
     */
    votingGetProposals({ hash, epoch, select, sort, offset, limit, }: {
        /** Filters proposals by hash **/
        hash?: ProtocolParameter | null;
        /** Filters proposals by voting epoch **/
        epoch?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts proposals by specified field. Supported fields: `id` (default), `upvotes`, `rolls`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Proposal>>;
    /**
     * Get proposal by hash
     * Returns the most recent protocol proposal with the specified hash.
     * @returns Proposal
     * @throws ApiError
     */
    votingGetProposalByHash({ hash, }: {
        /** Proposal hash **/
        hash: string | null;
    }): CancelablePromise<Proposal>;
    /**
     * Get voting periods
     * Returns a list of voting periods.
     * @returns VotingPeriod
     * @throws ApiError
     */
    votingGetPeriods({ select, sort, offset, limit, }: {
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts voting periods by specified field. Supported fields: `id` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<VotingPeriod>>;
    /**
     * Get voting period by index
     * Returns a voting period at the specified index.
     * @returns VotingPeriod
     * @throws ApiError
     */
    votingGetPeriod({ index, }: {
        /** Voting period index starting from zero **/
        index: number;
    }): CancelablePromise<VotingPeriod>;
    /**
     * Get current voting period
     * Returns current voting period.
     * @returns VotingPeriod
     * @throws ApiError
     */
    votingGetCurrentPeriod(): CancelablePromise<VotingPeriod>;
    /**
     * Get period voters
     * Returns voters from the voting period at the specified index.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoters({ index, status, sort, offset, limit, }: {
        /** Voting period index starting from zero **/
        index: number;
        /** Filters voters by status (`none`, `upvoted`, `voted_yay`, `voted_nay`, `voted_pass`) **/
        status?: VoterStatusParameter | null;
        /** Sorts voters by specified field. Supported fields: `id` (default), `rolls`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<VoterSnapshot>>;
    /**
     * Get period voter
     * Returns a voter with the specified address from the voting period at the specified index.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoter({ index, address, }: {
        /** Voting period index starting from zero **/
        index: number;
        /** Voter address **/
        address: string | null;
    }): CancelablePromise<VoterSnapshot>;
    /**
     * Get current period voters
     * Returns voters from the current period.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoters2({ status, sort, offset, limit, }: {
        /** Filters voters by status (`none`, `upvoted`, `voted_yay`, `voted_nay`, `voted_pass`) **/
        status?: VoterStatusParameter | null;
        /** Sorts voters by specified field. Supported fields: `id` (default), `rolls`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<VoterSnapshot>>;
    /**
     * Get current period voter
     * Returns a voter with the specified address from the current period.
     * @returns VoterSnapshot
     * @throws ApiError
     */
    votingGetPeriodVoter2({ address, }: {
        /** Voter address **/
        address: string | null;
    }): CancelablePromise<VoterSnapshot>;
    /**
     * Get voting epochs
     * Returns a list of voting epochs.
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetEpochs({ sort, offset, limit, }: {
        /** Sorts voting epochs by specified field. Supported fields: `id` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<VotingEpoch>>;
    /**
     * Get voting epoch by index
     * Returns a voting epoch at the specified index.
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetEpoch({ index, }: {
        /** Voting epoch index starting from zero **/
        index: number;
    }): CancelablePromise<VotingEpoch>;
    /**
     * Get current voting epoch
     * Returns the current voting epoch
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetCurrentEpoch(): CancelablePromise<VotingEpoch>;
    /**
     * Get latest voting
     * Returns the latest epoch with at least one proposal
     * @returns VotingEpoch
     * @throws ApiError
     */
    votingGetLatestVoting(): CancelablePromise<VotingEpoch>;
}
