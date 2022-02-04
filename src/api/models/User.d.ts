import type { Account } from './Account.js';
import type { AccountMetadata } from './AccountMetadata.js';
import type { DelegateInfo } from './DelegateInfo.js';
export declare type User = (Account & {
    type?: string | null;
    /**
     * Public key hash of the account
     */
    address?: string | null;
    /**
     * Name of the project behind the account or account description
     */
    alias?: string | null;
    /**
     * Base58 representation of account's public key, revealed by the account
     */
    publicKey?: string | null;
    /**
     * Public key revelation status. Unrevealed account can't send manager operation (transaction, origination etc.)
     */
    revealed?: boolean;
    /**
     * Account balance
     */
    balance?: number;
    /**
     * An account nonce which is used to prevent operation replay
     */
    counter?: number;
    /**
     * Information about the current delegate of the account. `null` if it's not delegated
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
     * Number of account activation operations. Are used to activate accounts that were recommended allocations of
     * tezos tokens for donations to the Tezos Foundation’s fundraiser
     */
    numActivations?: number;
    /**
     * Number of delegation operations, related to the account
     */
    numDelegations?: number;
    /**
     * Number of all origination (deployment / contract creation) operations, related to the account
     */
    numOriginations?: number;
    /**
     * Number of all transaction (tez transfer) operations, related to the account
     */
    numTransactions?: number;
    /**
     * Number of reveal (is used to reveal the public key associated with an account) operations of the contract
     */
    numReveals?: number;
    /**
     * Number of register global constant operations of the delegate (baker)
     */
    numRegisterConstants?: number;
    /**
     * Number of migration (result of the context (database) migration during a protocol update) operations,
     * related to the account (synthetic type)
     */
    numMigrations?: number;
    /**
     * Block height of the first operation, related to the account
     */
    firstActivity?: number | null;
    /**
     * Block datetime of the first operation, related to the account (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    firstActivityTime?: string | null;
    /**
     * Height of the block in which the account state was changed last time
     */
    lastActivity?: number | null;
    /**
     * Datetime of the block in which the account state was changed last time (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    lastActivityTime?: string | null;
    /**
     * Metadata of the account (alias, logo, website, contacts, etc)
     */
    metadata?: AccountMetadata | null;
});
