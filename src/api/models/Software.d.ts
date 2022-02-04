import type { RawJson } from './RawJson.js';
export declare type Software = {
    /**
     * Software ID (short commit hash)
     */
    shortHash?: string | null;
    /**
     * Level of the first block baked with this software
     */
    firstLevel?: number;
    /**
     * Datetime of the first block baked with this software
     */
    firstTime?: string;
    /**
     * Level of the last block baked with this software
     */
    lastLevel?: number;
    /**
     * Datetime of the last block baked with this software
     */
    lastTime?: string;
    /**
     * Total number of blocks baked with this software
     */
    blocksCount?: number;
    /**
     * Offchain metadata
     */
    metadata?: RawJson | null;
    /**
     * **DEPRECATED**. Use `metadata` instead.
     */
    commitDate?: string | null;
    /**
     * **DEPRECATED**. Use `metadata` instead.
     */
    commitHash?: string | null;
    /**
     * **DEPRECATED**. Use `metadata` instead.
     */
    version?: string | null;
    /**
     * **DEPRECATED**. Use `metadata` instead.
     */
    tags?: Array<string> | null;
};
