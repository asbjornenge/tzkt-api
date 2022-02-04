export declare type ProposalMetadata = {
    /**
     * Alias name of the proposal
     */
    alias?: string | null;
    /**
     * Hash of the proposal, which representing a tarball of concatenated .ml/.mli source files
     */
    hash?: string | null;
    /**
     * Link to the proposal on Tezos Agora portall with full details
     */
    agora?: string | null;
    /**
     * Reward for the proposal developers, that will be generated if the proposal is accepted
     */
    invoice?: number;
};
