import type { Alias } from './Alias.js';
import type { Operation } from './Operation.js';
import type { PeriodInfo } from './PeriodInfo.js';
import type { ProposalAlias } from './ProposalAlias.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type ProposalOperation = (Operation & {
    /**
     * Type of the operation, `proposal` - is used by bakers (delegates) to submit and/or upvote proposals to amend the protocol
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
     * Information about the proposal period for which the proposal was submitted (upvoted)
     */
    period?: PeriodInfo | null;
    /**
     * Information about the submitted (upvoted) proposal
     */
    proposal?: ProposalAlias | null;
    /**
     * Information about the baker (delegate), submitted (upvoted) the proposal operation
     */
    delegate?: Alias | null;
    /**
     * Number of baker's rolls (baker's voting power)
     */
    rolls?: number;
    /**
     * Indicates whether proposal upvote has already been pushed. Duplicated proposal operations are not counted when selecting proposal-winner.
     */
    duplicated?: boolean;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
