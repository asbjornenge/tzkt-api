export declare type ProtocolConstants = {
    /**
     * The number of cycles where security deposit is ramping up
     */
    rampUpCycles?: number;
    /**
     * The number of cycles with no baking rewards
     */
    noRewardCycles?: number;
    /**
     * A number of cycles in which baker's security deposit and rewards are frozen
     */
    preservedCycles?: number;
    /**
     * A number of blocks the cycle contains
     */
    blocksPerCycle?: number;
    /**
     * A number of blocks that indicates how often seed nonce hash is included in a block. Seed nonce hash presents in only one out of `blocksPerCommitment`
     */
    blocksPerCommitment?: number;
    /**
     * A number of blocks that indicates how often a snapshot (snapshots are records of the state of rolls distributions) is taken
     */
    blocksPerSnapshot?: number;
    /**
     * A number of block that indicates how long a voting period takes
     */
    blocksPerVoting?: number;
    /**
     * Minimum amount of seconds between blocks
     */
    timeBetweenBlocks?: number;
    /**
     * Number of bakers that assigned to endorse a block
     */
    endorsersPerBlock?: number;
    /**
     * Maximum amount of gas that one operation can consume
     */
    hardOperationGasLimit?: number;
    /**
     * Maximum amount of storage that one operation can consume
     */
    hardOperationStorageLimit?: number;
    /**
     * Maximum amount of total gas usage of a single block
     */
    hardBlockGasLimit?: number;
    /**
     * Required number of tokens to get 1 roll (micro tez)
     */
    tokensPerRoll?: number;
    /**
     * Reward for seed nonce revelation (micro tez)
     */
    revelationReward?: number;
    /**
     * Security deposit for baking (producing) a block (micro tez)
     */
    blockDeposit?: number;
    /**
     * Reward for baking (producing) a block (micro tez)
     */
    blockReward?: Array<number> | null;
    /**
     * Security deposit for sending an endorsement operation (micro tez)
     */
    endorsementDeposit?: number;
    /**
     * Reward for sending an endorsement operation (micro tez)
     */
    endorsementReward?: Array<number> | null;
    /**
     * Initial storage size of an originated (created) account (bytes)
     */
    originationSize?: number;
    /**
     * Cost of one storage byte in the blockchain (micro tez)
     */
    byteCost?: number;
    /**
     * Percentage of the total number of rolls required to select a proposal on the proposal period
     */
    proposalQuorum?: number;
    /**
     * The minimum value of quorum percentage on the exploration and promotion periods
     */
    ballotQuorumMin?: number;
    /**
     * The maximum value of quorum percentage on the exploration and promotion periods
     */
    ballotQuorumMax?: number;
    /**
     * Liquidity baking subsidy is 1/16th of total rewards for a block of priority 0 with all endorsements
     */
    lbSubsidy?: number;
    /**
     * Level after protocol activation when liquidity baking shuts off
     */
    lbSunsetLevel?: number;
    /**
     * 1/2 window size of 2000 blocks with precision of 1000 for integer computation
     */
    lbEscapeThreshold?: number;
};
