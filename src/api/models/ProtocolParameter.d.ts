export declare type ProtocolParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a protocol hash to get items where the specified field is equal to the specified value.
     *
     * Example: `?protocol=PsCARTHAGaz...`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a protocol hash to get items where the specified field is not equal to the specified value.
     *
     * Example: `?sender.ne=PsBabyM1eUX...`.
     */
    ne?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of protocol hashes to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?sender.in=PsCARTHAGaz,PsBabyM1eUX`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of protocol hashes to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?sender.ni=PsCARTHAGaz,PsBabyM1eUX`.
     */
    ni?: Array<string> | null;
};
