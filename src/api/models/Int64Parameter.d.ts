export declare type Int64Parameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify an integer number to get items where the specified field is equal to the specified value.
     *
     * Example: `?balance=1234`.
     */
    eq?: number | null;
    /**
     * **Not equal** filter mode. \
     * Specify an integer number to get items where the specified field is not equal to the specified value.
     *
     * Example: `?balance.ne=1234`.
     */
    ne?: number | null;
    /**
     * **Greater than** filter mode. \
     * Specify an integer number to get items where the specified field is greater than the specified value.
     *
     * Example: `?balance.gt=1234`.
     */
    gt?: number | null;
    /**
     * **Greater or equal** filter mode. \
     * Specify an integer number to get items where the specified field is greater than equal to the specified value.
     *
     * Example: `?balance.ge=1234`.
     */
    ge?: number | null;
    /**
     * **Less than** filter mode. \
     * Specify an integer number to get items where the specified field is less than the specified value.
     *
     * Example: `?balance.lt=1234`.
     */
    lt?: number | null;
    /**
     * **Less or equal** filter mode. \
     * Specify an integer number to get items where the specified field is less than or equal to the specified value.
     *
     * Example: `?balance.le=1234`.
     */
    le?: number | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of integers to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?level.in=12,14,52,69`.
     */
    in?: Array<number> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of integers to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?level.ni=12,14,52,69`.
     */
    ni?: Array<number> | null;
};
