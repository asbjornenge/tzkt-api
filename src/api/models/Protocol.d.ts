import type { ProtocolConstants } from './ProtocolConstants.js';
import type { ProtocolMetadata } from './ProtocolMetadata.js';
export declare type Protocol = {
    /**
     * Protocol code, representing a number of protocol changes since genesis (mod 256, but `-1` for the genesis block)
     */
    code?: number;
    /**
     * Hash of the protocol
     */
    hash?: string | null;
    /**
     * Block height where the protocol was applied
     */
    firstLevel?: number;
    /**
     * Index of the first cycle started with the protocol
     */
    firstCycle?: number;
    /**
     * Level of the first block of the first cycle started with the protocol
     */
    firstCycleLevel?: number;
    /**
     * Block height where the protocol ends. `null` if the protocol is active
     */
    lastLevel?: number | null;
    /**
     * Information about the protocol constants
     */
    constants?: ProtocolConstants | null;
    /**
     * Offchain metadata
     */
    metadata?: ProtocolMetadata | null;
};
