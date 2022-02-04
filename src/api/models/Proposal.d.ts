import type { Alias } from './Alias.js';
import type { ProposalMetadata } from './ProposalMetadata.js';
export declare type Proposal = {
    /**
     * Hash of the proposal, which representing a tarball of concatenated .ml/.mli source files
     */
    hash?: string | null;
    /**
     * Information about the baker (delegate) submitted the proposal
     */
    initiator?: Alias | null;
    /**
     * The first voting period where the proposal was active
     */
    firstPeriod?: number;
    /**
     * The last voting period where the proposal was active
     */
    lastPeriod?: number;
    /**
     * The voting epoch where the proposal was active
     */
    epoch?: number;
    /**
     * The total number of upvotes (proposal operations)
     */
    upvotes?: number;
    /**
     * The total number of rolls, upvoted the proposal
     */
    rolls?: number;
    /**
     * Status of the proposal
     * `active` - the proposal in the active state
     * `accepted` - the proposal was accepted
     * `rejected` - the proposal was rejected due to too many "nay" ballots
     * `skipped` - the proposal was skipped due to the quorum was not reached
     */
    status?: string | null;
    /**
     * Offchain metadata
     */
    metadata?: ProposalMetadata | null;
    /**
     * **DEPRECATED**. Use `firstPeriod` instead.
     */
    period?: number;
};
