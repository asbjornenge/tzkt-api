import type { Alias } from './Alias.js';
export declare type VoterSnapshot = {
    /**
     * Voter identity
     */
    delegate?: Alias | null;
    /**
     * Voter's rolls snapshot (aka voting power)
     */
    rolls?: number;
    /**
     * Voter's status:
     * `none` - the voter did nothing
     * `upvoted` - the voter upvoted at least one proposal
     * `voted_yay` - the voter voted "yay"
     * `voted_nay` - the voter voted "nay"
     * `voted_pass` - the voter voted "pass"
     */
    status?: string | null;
};
