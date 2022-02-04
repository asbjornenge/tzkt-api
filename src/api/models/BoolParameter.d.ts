export declare type BoolParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=true` is the same as `param=true`). \
     * Specify a bool flag to get items where the specified field is equal to the specified value.
     *
     * Example: `?active=true` or `?active=1` or `?active`.
     */
    eq?: boolean | null;
    /**
     * **Is null** filter mode. \
     * Use this mode to get items where the specified field is null or not.
     *
     * Example: `?active.null` or `?active.null=false`.
     */
    null?: boolean | null;
};
