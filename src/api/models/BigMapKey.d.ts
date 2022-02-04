export declare type BigMapKey = {
    /**
     * Internal Id, can be used for pagination
     */
    id?: number;
    /**
     * Bigmap key status (`true` - active, `false` - removed)
     */
    active?: boolean;
    /**
     * Key hash
     */
    hash?: string | null;
    /**
     * Key in JSON or Micheline format, depending on the `micheline` query parameter.
     */
    key?: any;
    /**
     * Value in JSON or Micheline format, depending on the `micheline` query parameter.
     * Note, if the key is inactive (removed) it will contain the last non-null value.
     */
    value?: any;
    /**
     * Level of the block where the bigmap key was seen first time
     */
    firstLevel?: number;
    /**
     * Level of the block where the bigmap key was seen last time
     */
    lastLevel?: number;
    /**
     * Total number of actions with the bigmap key
     */
    updates?: number;
};
