export declare type BigMapKeyUpdate = {
    /**
     * Internal Id, can be used for pagination
     */
    id?: number;
    /**
     * Level of the block where the bigmap key was updated
     */
    level?: number;
    /**
     * Timestamp of the block where the bigmap key was updated
     */
    timestamp?: string;
    /**
     * Action with the key (`add_key`, `update_key`, `remove_key`)
     */
    action?: string | null;
    /**
     * Value in JSON or Micheline format, depending on the `micheline` query parameter.
     * Note, if the action is `remove_key` it will contain the last non-null value.
     */
    value?: any;
};
