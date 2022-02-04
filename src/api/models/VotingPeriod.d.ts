export declare type VotingPeriod = {
    /**
     * Index of the voting period, starting from zero
     */
    index?: number;
    /**
     * Index of the voting epoch, starting from zero
     */
    epoch?: number;
    /**
     * The height of the block in which the period starts
     */
    firstLevel?: number;
    /**
     * The timestamp of the block in which the period starts
     */
    startTime?: string;
    /**
     * The height of the block in which the period ends
     */
    lastLevel?: number;
    /**
     * The timestamp of the block in which the period ends
     */
    endTime?: string;
    /**
     * Kind of the voting period:
     * `proposal` - delegates can submit protocol amendment proposals using the proposal operation
     * `exploration` -  bakers (delegates) may vote on the top-ranked proposal from the previous Proposal Period using the ballot operation
     * `testing` - If the proposal is approved in the Exploration Period, the testing (or 'cooldown') period begins and bakers start testing the new protocol
     * `promotion` - delegates can cast one vote to promote or not the tested proposal using the ballot operation
     * `adoption` - after the proposal is actually accepted, the ecosystem has some time to prepare to the upgrade
     * Learn more: https://tezos.gitlab.io/whitedoc/voting.html
     */
    kind?: string | null;
    /**
     * Status of the voting period:
     * `active` - means that the voting period is in progress
     * `no_proposals` - means that there were no proposals during the voting period
     * `no_quorum` - means that there was a voting but the quorum was not reached
     * `no_supermajority` - means that there was a voting but the supermajority was not reached
     * `success` - means that the period was finished with positive voting result
     */
    status?: string | null;
    /**
     * The number of bakers on the voters list
     */
    totalBakers?: number | null;
    /**
     * The number of rolls of bakers on the voters list
     */
    totalRolls?: number | null;
    /**
     * Upvotes quorum percentage (only for proposal period)
     */
    upvotesQuorum?: number | null;
    /**
     * The number of proposals injected during the voting period (only for proposal period)
     */
    proposalsCount?: number | null;
    /**
     * This is how many upvotes (proposal operations) the most upvoted proposal has (only for proposal period)
     */
    topUpvotes?: number | null;
    /**
     * This is how many rolls the most upvoted proposal has (only for proposal period)
     */
    topRolls?: number | null;
    /**
     * Ballots quorum percentage (only for exploration and promotion periods)
     */
    ballotsQuorum?: number | null;
    /**
     * Supermajority percentage (only for exploration and promotion periods)
     */
    supermajority?: number | null;
    /**
     * The number of the ballots with "yay" vote (only for exploration and promotion periods)
     */
    yayBallots?: number | null;
    /**
     * Total rolls of the ballots with "yay" vote (only for exploration and promotion periods)
     */
    yayRolls?: number | null;
    /**
     * The number of the ballots with "nay" vote (only for exploration and promotion periods)
     */
    nayBallots?: number | null;
    /**
     * Total rolls of the ballots with "nay" vote (only for exploration and promotion periods)
     */
    nayRolls?: number | null;
    /**
     * The number of the ballots with "pass" vote (only for exploration and promotion periods)
     */
    passBallots?: number | null;
    /**
     * Total rolls of the ballots with "pass" vote (only for exploration and promotion periods)
     */
    passRolls?: number | null;
};
