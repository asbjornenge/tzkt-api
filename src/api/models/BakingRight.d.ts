import type { Alias } from './Alias.js';
export declare type BakingRight = {
    /**
     * Type of the right:
     * - `baking` - right to bake (produce) a block;
     * - `endorsing` - right to endorse (validate) a block.
     */
    type?: string | null;
    /**
     * Cycle on which the right can be realized.
     */
    cycle?: number;
    /**
     * Level at which a block must be baked or an endorsement must be sent.
     */
    level?: number;
    /**
     * Time (estimated, in case of future rights) when a block must be baked or an endorsement must be sent.
     */
    timestamp?: string;
    /**
     * Priority (0 - ∞) with which baker can produce a block.
     * If a baker with priority `0` doesn't produce a block within a given time interval, then the right goes to a baker with priority` 1`, etc.
     * For `endorsing` rights this field is always `null`.
     */
    priority?: number | null;
    /**
     * Number of slots (1 - 32) to be endorsed. For `baking` rights this field is always `null`.
     */
    slots?: number | null;
    /**
     * Baker to which baking or endorsing right has been given.
     */
    baker?: Alias | null;
    /**
     * Status of the baking or endorsing right:
     * - `future` - the right is not realized yet;
     * - `realized` - the right was successfully realized;
     * - `uncovered` - the right was not realized due to lack of bonds (for example, when a baker is overdelegated);
     * - `missed` - the right was not realized for no apparent reason (usually due to issues with network or node).
     */
    status?: string | null;
};
