import type { BigMapKeyShort } from './BigMapKeyShort.js';
export declare type BigMapDiff = {
    /**
     * Bigmap Id
     */
    bigmap?: number;
    /**
     * Path to the bigmap in the contract storage
     */
    path?: string | null;
    /**
     * Action with the bigmap (`allocate`, `add_key`, `update_key`, `remove_key`, `remove`)
     */
    action?: string | null;
    /**
     * Affected key.
     * If the action is `allocate` or `remove` the key will be `null`.
     */
    content?: BigMapKeyShort | null;
};
