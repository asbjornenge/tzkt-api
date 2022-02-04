import type { Proposal } from './Proposal.js';
import type { VotingPeriod } from './VotingPeriod.js';
export declare type VotingEpoch = {
    /**
     * Index of the voting epoch, starting from zero
     */
    index?: number;
    /**
     * The height of the block in which the epoch starts
     */
    firstLevel?: number;
    /**
     * The timestamp of the block in which the epoch starts
     */
    startTime?: string;
    /**
     * The height of the block in which the epoch ends
     */
    lastLevel?: number;
    /**
     * The timestamp of the block in which the epoch ends
     */
    endTime?: string;
    /**
     * Status of the voting epoch:
     * `no_proposals` - there were no proposals proposed
     * `voting` - there was at least one proposal and the voting is in progress
     * `completed` - voting successfully completed and the proposal was accepted
     * `failed` - voting was not completed due to either quorum or supermajority was not reached
     */
    status?: string | null;
    /**
     * Voting periods in the epoch
     */
    periods?: Array<VotingPeriod> | null;
    /**
     * Proposals pushed during the voting epoch (null, if there were no proposals).
     */
    proposals?: Array<Proposal> | null;
};
