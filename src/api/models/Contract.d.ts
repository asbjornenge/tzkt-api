import type { Account } from './Account.js';
import type { AccountMetadata } from './AccountMetadata.js';
import type { CreatorInfo } from './CreatorInfo.js';
import type { DelegateInfo } from './DelegateInfo.js';
import type { ManagerInfo } from './ManagerInfo.js';
export declare type Contract = (Account & {
    /**
     * Type of the account, `contract` - smart contract programmable account
     */
    type?: string | null;
    /**
     * Public key hash of the contract
     */
    address?: string | null;
    /**
     * Kind of the contract (`delegator_contract` or `smart_contract`),
     * where `delegator_contract` - manager.tz smart contract for delegation purpose only
     */
    kind?: string | null;
    /**
     * List of implemented standards (TZIPs)
     */
    tzips?: Array<string> | null;
    /**
     * Name of the project behind the contract or contract description
     */
    alias?: string | null;
    /**
     * Contract balance (micro tez)
     */
    balance?: number;
    /**
     * Information about the account, which has deployed the contract to the blockchain
     */
    creator?: CreatorInfo | null;
    /**
     * Information about the account, which was marked as a manager when contract was deployed to the blockchain
     */
    manager?: ManagerInfo | null;
    /**
     * Information about the current delegate of the contract. `null` if it's not delegated
     */
    delegate?: DelegateInfo | null;
    /**
     * Block height of latest delegation. `null` if it's not delegated
     */
    delegationLevel?: number | null;
    /**
     * Block datetime of latest delegation (ISO 8601, e.g. `2020-02-20T02:40:57Z`). `null` if it's not delegated
     */
    delegationTime?: string | null;
    /**
     * Number of contracts, created (originated) and/or managed by the contract
     */
    numContracts?: number;
    /**
     * Number of delegation operations of the contract
     */
    numDelegations?: number;
    /**
     * Number of origination (deployment / contract creation) operations, related the contract
     */
    numOriginations?: number;
    /**
     * Number of transaction (transfer) operations, related to the contract
     */
    numTransactions?: number;
    /**
     * Number of reveal (is used to reveal the public key associated with an account) operations of the contract
     */
    numReveals?: number;
    /**
     * Number of migration (result of the context (database) migration during a protocol update) operations
     * related to the contract (synthetic type)
     */
    numMigrations?: number;
    /**
     * Block height of the contract creation
     */
    firstActivity?: number;
    /**
     * Block datetime of the contract creation (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    firstActivityTime?: string;
    /**
     * Height of the block in which the account state was changed last time
     */
    lastActivity?: number;
    /**
     * Datetime of the block in which the account state was changed last time (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    lastActivityTime?: string;
    /**
     * Contract storage value. Omitted by default. Use `?includeStorage=true` to include it in response.
     */
    storage?: any;
    /**
     * 32-bit hash of the contract parameter and storage types.
     * This field can be used for searching similar contracts (which have the same interface).
     */
    typeHash?: number;
    /**
     * 32-bit hash of the contract code.
     * This field can be used for searching same contracts (which have the same script).
     */
    codeHash?: number;
    /**
     * Metadata of the contract (alias, logo, website, contacts, etc)
     */
    metadata?: AccountMetadata | null;
});
