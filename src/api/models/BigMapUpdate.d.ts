import type { Alias } from './Alias.js';
import type { BigMapKeyShort } from './BigMapKeyShort.js';
export declare type BigMapUpdate = {
    /**
     * Internal Id, can be used for pagination
     */
    id?: number;
    /**
     * Level of the block where the bigmap was updated
     */
    level?: number;
    /**
     * Timestamp of the block where the bigmap was updated
     */
    timestamp?: string;
    /**
     * Bigmap ptr
     */
    bigmap?: number;
    /**
     * Smart contract in which's storage the bigmap is allocated
     */
    contract?: Alias | null;
    /**
     * Path to the bigmap in the contract storage
     */
    path?: string | null;
    /**
     * Action with the bigmap (`allocate`, `add_key`, `update_key`, `remove_key`, `remove`)
     */
    action?: string | null;
    /**
     * Updated key.
     * If the action is `allocate` or `remove` the content will be `null`.
     */
    content?: BigMapKeyShort | null;
};
