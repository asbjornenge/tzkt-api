import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { PeriodInfo } from './PeriodInfo.js';
import type { ProposalAlias } from './ProposalAlias.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type BallotOperation = (Operation & {
    /**
     * Type of the operation, `ballot` - is used to vote for a proposal in a given voting cycle
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
     * Information about the voting period for which the ballot was submitted
     */
    period?: PeriodInfo | null;
    /**
     * Information about the proposal for which ballot was submitted
     */
    proposal?: ProposalAlias | null;
    /**
     * Information about the delegate (baker), submitted the ballot
     */
    delegate?: Alias | null;
    /**
     * Number of baker's rolls (baker's voting power)
     */
    rolls?: number;
    /**
     * Vote, given in the ballot (`yay`, `nay`, or `pass`)
     */
    vote?: string | null;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
