import type { SourceOperation } from './SourceOperation.js';
export declare type StorageRecord = {
    /**
     * Id of the record that can be used for pagination
     */
    id?: number;
    /**
     * Level at which the storage value was taken
     */
    level?: number;
    /**
     * Timestamp at which the storage value was taken
     */
    timestamp?: string;
    /**
     * Operation that caused the storage change
     */
    operation?: SourceOperation | null;
    /**
     * New storage value
     */
    value?: any;
};
