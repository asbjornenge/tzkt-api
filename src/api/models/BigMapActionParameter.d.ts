export declare type BigMapActionParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a contract kind to get items where the specified field is equal to the specified value.
     *
     * Example: `?kind=smart_contract`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a contract kind to get items where the specified field is not equal to the specified value.
     *
     * Example: `?kind.ne=delegator_contract`.
     */
    ne?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of contract kinds to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?kind.in=smart_contract,asset`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of contract kinds to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?kind.ni=smart_contract,asset`.
     */
    ni?: Array<string> | null;
};
