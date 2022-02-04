import type { Alias } from './Alias.js';
import type { BigMapDiff } from './BigMapDiff.js';
import type { Operation } from './Operation.js';
import type { QuoteShort } from './QuoteShort.js';
export declare type MigrationOperation = (Operation & {
    /**
     * Type of the operation, `migration` - result of the context (database) migration during a protocol update (synthetic type)
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
     * Kind of the migration
     * `bootstrap` - balance updates, included in the first block after genesis
     * `activate_delegate` - registering a new baker (delegator) during protocol migration
     * `airdrop` - airdrop of 1 micro tez during Babylon protocol upgrade
     * `proposal_invoice` - invoice for creation a proposal for protocol upgrade
     * `code_change` - changing contract scripts during Babylon protocol upgrade
     * `origination` - implicit (hardcoded in the protocol) origination of liquidity baking contracts
     * `subsidy` - liquidity baking subsidy
     */
    kind?: string | null;
    /**
     * Information about the account whose balance has updated as a result of the operation
     */
    account?: Alias | null;
    /**
     * The amount for which the operation updated the balance (micro tez)
     */
    balanceChange?: number;
    /**
     * Contract storage after the migration converted to human-readable JSON. Note: you can configure storage format by setting `micheline` query parameter.
     */
    storage?: any;
    /**
     * List of bigmap updates caused by the migration.
     */
    diffs?: Array<BigMapDiff> | null;
    /**
     * Injected historical quote at the time of operation
     */
    quote?: QuoteShort | null;
});
