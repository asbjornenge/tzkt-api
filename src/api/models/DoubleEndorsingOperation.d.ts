import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type DoubleEndorsingOperation = (Operation & {
    /**
     * Type of the operation, `double_endorsing` - is used by bakers to provide evidence of double endorsement
     * (endorsing two different blocks at the same block height) by a baker
     */
    type?: string | null;
    /**
     * Unique ID of the operation, stored in the TzKT indexer database
     */
    id?: number;
    /**
     * The height of the block from the genesis block, in which the operation was included
     */
    level?: number;
    /**
     * Datetime of the block, in which the operation was included (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * Hash of the block, in which the operation was included
     */
    block?: string | null;
    /**
     * Hash of the operation
     */
    hash?: string | null;
    /**
     * The height of the block from the genesis block, at which double endorsing occurred
     */
    accusedLevel?: number;
    /**
     * Information about the baker (delegate), produced the block, in which the operation was included
     */
    accuser?: Alias | null;
    /**
     * Reward of the baker (delegate), produced the block, in which the operation was included
     */
    accuserRewards?: number;
    /**
     * Information about the baker (delegate), accused for producing two different endorsements at the same height
     */
    offender?: Alias | null;
    /**
     * Amount of frozen security deposit, lost by accused baker (delegate)
     */
    offenderLostDeposits?: number;
    /**
     * Amount of frozen rewards, lost by accused baker (delegate)
     */
    offenderLostRewards?: number;
    /**
     * Amount of frozen fees, lost by accused baker (delegate)
     */
    offenderLostFees?: number;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
