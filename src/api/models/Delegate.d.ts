import type { Account } from './Account.js';
import type { AccountMetadata } from './AccountMetadata.js';
import type { SoftwareAlias } from './SoftwareAlias.js';
export declare type Delegate = (Account & {
    /**
     * Type of the account, `delegate` - account, registered as a delegate (baker)
     */
    type?: string | null;
    /**
     * Public key hash of the delegate (baker)
     */
    address?: string | null;
    /**
     * Delegation status (`true` - active, `false` - deactivated)
     */
    active?: boolean;
    /**
     * Name of the baking service
     */
    alias?: string | null;
    /**
     * Public key of the delegate (baker)
     */
    publicKey?: string | null;
    /**
     * Public key revelation status. Unrevealed account can't send manager operation (transaction, origination etc.)
     */
    revealed?: boolean;
    /**
     * Total balance of the delegate (baker), including spendable and frozen funds (micro tez)
     */
    balance?: number;
    /**
     * Amount of security deposit, currently locked for baked (produced) blocks and (or) given endorsements (micro tez)
     */
    frozenDeposits?: number;
    /**
     * Amount of currently frozen baking rewards (micro tez)
     */
    frozenRewards?: number;
    /**
     * Amount of currently frozen fees paid by operations inside blocks, baked (produced) by the delegate (micro tez)
     */
    frozenFees?: number;
    /**
     * An account nonce which is used to prevent operation replay
     */
    counter?: number;
    /**
     * Block height when delegate (baker) was registered as a baker last time
     */
    activationLevel?: number;
    /**
     * Block datetime when delegate (baker) was registered as a baker last time (ISO 8601, e.g. 2019-11-31)
     */
    activationTime?: string;
    /**
     * Block height when delegate (baker) was deactivated as a baker because of lack of funds or inactivity
     */
    deactivationLevel?: number | null;
    /**
     * Block datetime when delegate (baker) was deactivated as a baker because of lack of funds or inactivity (ISO 8601, e.g. 2019-11-31)
     */
    deactivationTime?: string | null;
    /**
     * Sum of delegate (baker) balance and delegated funds minus frozen rewards (micro tez)
     */
    stakingBalance?: number;
    /**
     * Number of contracts, created (originated) and/or managed by the delegate (baker)
     */
    numContracts?: number;
    /**
     * Number of current delegators (accounts, delegated their funds) of the delegate (baker)
     */
    numDelegators?: number;
    /**
     * Number of baked (validated) blocks all the time by the delegate (baker)
     */
    numBlocks?: number;
    /**
     * Number of given endorsements (approvals) by the delegate (baker)
     */
    numEndorsements?: number;
    /**
     * Number of submitted by the delegate ballots during a voting period
     */
    numBallots?: number;
    /**
     * Number of submitted (upvoted) by the delegate proposals during a proposal period
     */
    numProposals?: number;
    /**
     * Number of account activation operations. Are used to activate accounts that were recommended allocations of
     * tezos tokens for donations to the Tezos Foundation’s fundraiser
     */
    numActivations?: number;
    /**
     * Number of double baking (baking two different blocks at the same height) evidence operations,
     * included in blocks, baked (validated) by the delegate
     */
    numDoubleBaking?: number;
    /**
     * Number of double endorsement (endorsing two different blocks at the same block height) evidence operations,
     * included in blocks, baked (validated) by the delegate
     */
    numDoubleEndorsing?: number;
    /**
     * Number of seed nonce revelation (are used by the blockchain to create randomness) operations provided by the delegate
     */
    numNonceRevelations?: number;
    /**
     * Number of operations for all time in which rewards were lost due to unrevealed seed nonces by the delegate (synthetic type)
     */
    numRevelationPenalties?: number;
    /**
     * Number of all delegation related operations (new delegator, left delegator, registration as a baker),
     * related to the delegate (baker)
     */
    numDelegations?: number;
    /**
     * Number of all origination (deployment / contract creation) operations, related to the delegate (baker)
     */
    numOriginations?: number;
    /**
     * Number of all transaction (tez transfer) operations, related to the delegate (baker)
     */
    numTransactions?: number;
    /**
     * Number of reveal (is used to reveal the public key associated with an account) operations of the delegate (baker)
     */
    numReveals?: number;
    /**
     * Number of register global constant operations of the delegate (baker)
     */
    numRegisterConstants?: number;
    /**
     * Number of migration (result of the context (database) migration during a protocol update) operations,
     * related to the delegate (synthetic type)
     */
    numMigrations?: number;
    /**
     * Block height of the first operation, related to the delegate (baker)
     */
    firstActivity?: number;
    /**
     * Block datetime of the first operation, related to the delegate (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
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
     * Metadata of the delegate (alias, logo, website, contacts, etc)
     */
    metadata?: AccountMetadata | null;
    /**
     * Last seen baker's software
     */
    software?: SoftwareAlias | null;
});
