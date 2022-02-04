export declare type BigMapKeyHistorical = {
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
};
