export declare type OperationStatusParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=applied` is the same as `param=applied`). \
     * Specify an operation status to get items where the specified field is equal to the specified value.
     *
     * Example: `?type=failed`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify an operation status to get items where the specified field is not equal to the specified value.
     *
     * Example: `?type.ne=applied`.
     */
    ne?: string | null;
};
