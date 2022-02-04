export declare type MigrationKindParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a migration kind to get items where the specified field is equal to the specified value.
     *
     * Example: `?kind=bootstrap`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a migration kind to get items where the specified field is not equal to the specified value.
     *
     * Example: `?type.ne=proposal_invoice`.
     */
    ne?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of migration kinds to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?sender.in=bootstrap,proposal_invoice`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of migration kinds to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?sender.ni=airdrop,bootstrap`.
     */
    ni?: Array<string> | null;
};
