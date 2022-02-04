export declare type AccountTypeParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify an account type to get items where the specified field is equal to the specified value.
     *
     * Example: `?type=delegate`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify an account type to get items where the specified field is not equal to the specified value.
     *
     * Example: `?type.ne=contract`.
     */
    ne?: string | null;
};
