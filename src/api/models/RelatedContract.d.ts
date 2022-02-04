import type { DelegateInfo } from './DelegateInfo.js';
export declare type RelatedContract = {
    /**
     * Kind of the contract (`delegator_contract` or `smart_contract`),
     * where `delegator_contract` - manager.tz smart contract for delegation purpose only
     */
    kind?: string | null;
    /**
     * Name of the project behind the contract or contract description
     */
    alias?: string | null;
    /**
     * Public key hash of the contract
     */
    address?: string | null;
    /**
     * Contract balance (micro tez)
     */
    balance?: number;
    /**
     * Information about the current delegate of the contract. `null` if it's not delegated
     */
    delegate?: DelegateInfo | null;
    /**
     * Height of the block where the contract was created
     */
    creationLevel?: number;
    /**
     * Datetime of the block where the contract was created (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    creationTime?: string | null;
};
