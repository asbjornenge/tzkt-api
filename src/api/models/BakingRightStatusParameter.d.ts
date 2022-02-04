export declare type BakingRightStatusParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify baking right status to get items where the specified field is equal to the specified value.
     *
     * Example: `?type=future`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify baking right status to get items where the specified field is not equal to the specified value.
     *
     * Example: `?type.ne=missed`.
     */
    ne?: string | null;
};
