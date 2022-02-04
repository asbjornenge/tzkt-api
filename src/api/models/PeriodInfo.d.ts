export declare type PeriodInfo = {
    /**
     * Voting period index, starting from zero
     */
    index?: number;
    /**
     * Voting epoch index, starting from zero
     */
    epoch?: number;
    /**
     * Kind of the voting period
     * `proposal` - delegates can submit protocol amendment proposals using the proposal operation
     * `exploration` -  bakers (delegates) may vote on the top-ranked proposal from the previous Proposal Period using the ballot operation
     * `testing` - If the proposal is approved in the Exploration Period, the testing (or 'cooldown') period begins and bakers start testing the new protocol
     * `promotion` - delegates can cast one vote to promote or not the tested proposal using the ballot operation
     * `adoption` - after the proposal is actually accepted, the ecosystem has some time to prepare to the upgrade
     * Learn more: https://tezos.gitlab.io/whitedoc/voting.html
     */
    kind?: string | null;
    /**
     * The height of the block in which the period starts
     */
    firstLevel?: number;
    /**
     * The height of the block in which the period ends
     */
    lastLevel?: number;
    /**
     * **DEPRECATED**. Use `index` instead.
     */
    id?: number;
    /**
     * **DEPRECATED**. Use `firstLevel` instead.
     */
    startLevel?: number;
    /**
     * **DEPRECATED**. Use `lastLevel` instead.
     */
    endLevel?: number;
};
