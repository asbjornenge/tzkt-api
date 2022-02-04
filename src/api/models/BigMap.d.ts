import type { Alias } from './Alias.js';
export declare type BigMap = {
    /**
     * Bigmap pointer
     */
    ptr?: number;
    /**
     * Smart contract in which's storage the bigmap is allocated
     */
    contract?: Alias | null;
    /**
     * Path to the bigmap in the contract storage
     */
    path?: string | null;
    /**
     * List of tags (`token_metadata` - tzip-12, `metadata` - tzip-16, `null` - no tags)
     */
    tags?: Array<string> | null;
    /**
     * Bigmap status (`true` - active, `false` - removed)
     */
    active?: boolean;
    /**
     * Level of the block where the bigmap was seen first time
     */
    firstLevel?: number;
    /**
     * Level of the block where the bigmap was seen last time
     */
    lastLevel?: number;
    /**
     * Total number of keys ever added to the bigmap
     */
    totalKeys?: number;
    /**
     * Total number of currently active keys
     */
    activeKeys?: number;
    /**
     * Total number of actions with the bigmap
     */
    updates?: number;
    /**
     * Bigmap key type as JSON schema or Micheline, depending on the `micheline` query parameter.
     */
    keyType?: any;
    /**
     * Bigmap value type as JSON schema or Micheline, depending on the `micheline` query parameter.
     */
    valueType?: any;
};
