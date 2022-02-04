import type { ActivationOperation } from './ActivationOperation.js';
import type { Alias } from './Alias.js';
import type { BallotOperation } from './BallotOperation.js';
import type { DelegationOperation } from './DelegationOperation.js';
import type { DoubleBakingOperation } from './DoubleBakingOperation.js';
import type { DoubleEndorsingOperation } from './DoubleEndorsingOperation.js';
import type { EndorsementOperation } from './EndorsementOperation.js';
import type { MigrationOperation } from './MigrationOperation.js';
import type { NonceRevelationOperation } from './NonceRevelationOperation.js';
import type { OriginationOperation } from './OriginationOperation.js';
import type { ProposalOperation } from './ProposalOperation.js';
import type { QuoteShort } from './QuoteShort.js';
import type { RegisterConstantOperation } from './RegisterConstantOperation.js';
import type { RevealOperation } from './RevealOperation.js';
import type { RevelationPenaltyOperation } from './RevelationPenaltyOperation.js';
import type { SoftwareAlias } from './SoftwareAlias.js';
import type { TransactionOperation } from './TransactionOperation.js';
export declare type Block = {
    /**
     * Index of the cycle
     */
    cycle?: number;
    /**
     * The height of the block from the genesis block
     */
    level?: number;
    /**
     * Block hash
     */
    hash?: string | null;
    /**
     * The datetime at which the block is claimed to have been created (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * Protocol code, representing a number of protocol changes since genesis (mod 256, but `-1` for the genesis block)
     */
    proto?: number;
    /**
     * The position in the priority list of delegates at which the block was baked
     */
    priority?: number;
    /**
     * Number of endorsements, confirmed the block
     */
    validations?: number;
    /**
     * Security deposit frozen on the baker's account for producing the block (micro tez)
     */
    deposit?: number;
    /**
     * Reward of the baker for producing the block (micro tez)
     */
    reward?: number;
    /**
     * Total fee paid by all operations, included in the block
     */
    fees?: number;
    /**
     * Status of the seed nonce revelation
     * `true` - seed nonce revealed
     * `false` - there's no `seed_nonce_hash` in the block or seed nonce revelation has missed
     */
    nonceRevealed?: boolean;
    /**
     * Information about a delegate (baker), produced the block
     */
    baker?: Alias | null;
    /**
     * Information about baker's software
     */
    software?: SoftwareAlias | null;
    /**
     * Flag indicating that the baker has voted for disabling liquidity baking
     */
    lbEscapeVote?: boolean;
    /**
     * Liquidity baking escape EMA value with precision of 1000 for integer computation
     */
    lbEscapeEma?: number;
    /**
     * List of endorsement (is operation, which specifies the head of the chain as seen by the endorser of a given slot)
     * operations, included in the block
     */
    endorsements?: Array<EndorsementOperation> | null;
    /**
     * List of proposal (is used by bakers (delegates) to submit and/or upvote proposals to amend the protocol)
     * operations, included in the block
     */
    proposals?: Array<ProposalOperation> | null;
    /**
     * List of ballot (is used to vote for a proposal in a given voting cycle) operations, included in the block
     */
    ballots?: Array<BallotOperation> | null;
    /**
     * List of activation (is used to activate accounts that were recommended allocations of
     * tezos tokens for donations to the Tezos Foundation’s fundraiser) operations, included in the block
     */
    activations?: Array<ActivationOperation> | null;
    /**
     * List of double baking evidence (is used by bakers to provide evidence of double baking (baking two different
     * blocks at the same height) by a baker) operations, included in the block
     */
    doubleBaking?: Array<DoubleBakingOperation> | null;
    /**
     * List of double endorsement evidence (is used by bakers to provide evidence of double endorsement
     * (endorsing two different blocks at the same block height) by a baker) operations, included in the block
     */
    doubleEndorsing?: Array<DoubleEndorsingOperation> | null;
    /**
     * List of nonce revelation (are used by the blockchain to create randomness) operations, included in the block
     */
    nonceRevelations?: Array<NonceRevelationOperation> | null;
    /**
     * List of delegation (is used to delegate funds to a delegate (an implicit account registered as a baker))
     * operations, included in the block
     */
    delegations?: Array<DelegationOperation> | null;
    /**
     * List of origination (deployment / contract creation ) operations, included in the block
     */
    originations?: Array<OriginationOperation> | null;
    /**
     * List of transaction (is a standard operation used to transfer tezos tokens to an account)
     * operations, included in the block
     */
    transactions?: Array<TransactionOperation> | null;
    /**
     * List of reveal (is used to reveal the public key associated with an account) operations, included in the block
     */
    reveals?: Array<RevealOperation> | null;
    /**
     * List of register global constant operations, included in the block
     */
    registerConstants?: Array<RegisterConstantOperation> | null;
    /**
     * List of migration operations, implicitly applied at the end of the block
     */
    migrations?: Array<MigrationOperation> | null;
    /**
     * List of revelation penalty operations, implicitly applied at the end of the block
     */
    revelationPenalties?: Array<RevelationPenaltyOperation> | null;
    /**
     * Injected historical quote at the time of block
     */
    quote?: QuoteShort | null;
};
