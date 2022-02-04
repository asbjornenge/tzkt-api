import type { SplitDelegator } from './SplitDelegator.js';
export declare type RewardSplit = {
    /**
     * Cycle in which rewards have been or will be earned.
     */
    cycle?: number;
    /**
     * Staking balance of the baker at the snapshot time.
     */
    stakingBalance?: number;
    /**
     * Balance delegated to the baker at the snapshot time (sum of delegators' balances).
     */
    delegatedBalance?: number;
    /**
     * Number of delegators at the snapshot time.
     */
    numDelegators?: number;
    /**
     * Expected value of how many blocks baker should produce based on baker's rolls, total rolls and blocks per cycle.
     */
    expectedBlocks?: number;
    /**
     * Expected value of how many slots baker should validate based on baker's rolls, total rolls and endorsing slots per cycle.
     */
    expectedEndorsements?: number;
    /**
     * Number of blocks which baker is allowed to produce in this cycle based on future baking rights.
     */
    futureBlocks?: number;
    /**
     * Estimated value of future block rewards.
     */
    futureBlockRewards?: number;
    /**
     * Estimated value of bonds which will be locked as security deposit for future blocks.
     */
    futureBlockDeposits?: number;
    /**
     * Number of successfully baked blocks with priority `0`.
     */
    ownBlocks?: number;
    /**
     * Rewards received for blocks baked with priority `0`.
     */
    ownBlockRewards?: number;
    /**
     * Number of successfully baked blocks with priority `1+`.
     */
    extraBlocks?: number;
    /**
     * Rewards received for blocks baked with priority `1+`.
     */
    extraBlockRewards?: number;
    /**
     * Number of blocks which were missed at priority `0` for no apparent reason (usually due to issues with network or node).
     */
    missedOwnBlocks?: number;
    /**
     * Rewards which were not received due to missing own blocks.
     */
    missedOwnBlockRewards?: number;
    /**
     * Number of blocks which were missed at priority `1+` for no apparent reason (usually due to issues with network or node).
     */
    missedExtraBlocks?: number;
    /**
     * Rewards which were not received due to missing extra blocks.
     */
    missedExtraBlockRewards?: number;
    /**
     * Number of blocks which were missed at priority `0` due to lack of bonds (for example, when a baker is overdelegated).
     */
    uncoveredOwnBlocks?: number;
    /**
     * Rewards which were not received due to missing own blocks due to lack of bonds.
     */
    uncoveredOwnBlockRewards?: number;
    /**
     * Number of blocks which were missed at priority `1+` due to lack of bonds (for example, when a baker is overdelegated).
     */
    uncoveredExtraBlocks?: number;
    /**
     * Rewards which were not received due to missing extra blocks due to lack of bonds.
     */
    uncoveredExtraBlockRewards?: number;
    /**
     * Bonds which were locked as a security deposit for baking own and extra blocks.
     */
    blockDeposits?: number;
    /**
     * Number of slots which baker is allowed to validate in this cycle based on future endorsing rights.
     */
    futureEndorsements?: number;
    /**
     * Estimated value of future endorsing rewards.
     */
    futureEndorsementRewards?: number;
    /**
     * Estimated value of bonds which will be locked as security deposit for future endorsements.
     */
    futureEndorsementDeposits?: number;
    /**
     * Number of successfully endorsed slots.
     */
    endorsements?: number;
    /**
     * Rewards received for endorsed slots.
     */
    endorsementRewards?: number;
    /**
     * Number of endorsing slots which were missed for no apparent reason (usually due to issues with network or node).
     */
    missedEndorsements?: number;
    /**
     * Rewards which were not received due to missing endorsements.
     */
    missedEndorsementRewards?: number;
    /**
     * Number of endorsing slots which were missed due to lack of bonds (for example, when a baker is overdelegated).
     */
    uncoveredEndorsements?: number;
    /**
     * Rewards which were not received due to missing endorsements due to lack of bonds.
     */
    uncoveredEndorsementRewards?: number;
    /**
     * Bonds which were locked as a security deposit for endorsed slots.
     */
    endorsementDeposits?: number;
    /**
     * Operation fees which were harvested from successfully baked blocks with priority `0`.
     */
    ownBlockFees?: number;
    /**
     * Operation fees which were harvested from successfully baked blocks with priority `1+`.
     */
    extraBlockFees?: number;
    /**
     * Operation fees which were not received due to missing own blocks.
     */
    missedOwnBlockFees?: number;
    /**
     * Operation fees which were not received due to missing extra blocks.
     */
    missedExtraBlockFees?: number;
    /**
     * Operation fees which were not received due to missing own blocks (due to lack of bonds).
     */
    uncoveredOwnBlockFees?: number;
    /**
     * Operation fees which were not received due to missing extra blocks (due to lack of bonds).
     */
    uncoveredExtraBlockFees?: number;
    /**
     * Rewards for detecting double baking (accusing someone of producing two different blocks at the same level).
     */
    doubleBakingRewards?: number;
    /**
     * Bonds lost due to double baking
     */
    doubleBakingLostDeposits?: number;
    /**
     * Rewards lost due to double baking
     */
    doubleBakingLostRewards?: number;
    /**
     * Fees lost due to double baking
     */
    doubleBakingLostFees?: number;
    /**
     * Rewards for detecting double endorsing (accusing someone of validating two different blocks at the same level).
     */
    doubleEndorsingRewards?: number;
    /**
     * Bonds lost due to double endorsing
     */
    doubleEndorsingLostDeposits?: number;
    /**
     * Rewards lost due to double endorsing
     */
    doubleEndorsingLostRewards?: number;
    /**
     * Fees lost due to double endorsing
     */
    doubleEndorsingLostFees?: number;
    /**
     * Rewards for including into a block seed nonce revelation operations.
     */
    revelationRewards?: number;
    /**
     * Rewards lost due to missing seed nonce revelation.
     */
    revelationLostRewards?: number;
    /**
     * Fees lost due to missing seed nonce revelation.
     */
    revelationLostFees?: number;
    /**
     * List of delegators at the snapshot time
     */
    delegators?: Array<SplitDelegator> | null;
};
