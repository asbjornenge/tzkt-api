export declare type BigMapKeyShort = {
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
     * Note, if the action is `remove_key` it will contain the last non-null value.
     */
    value?: any;
};
