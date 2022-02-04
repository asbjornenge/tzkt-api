export declare type DateTimeParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=2020-01-01` is the same as `param=2020-01-01`). \
     * Specify a datetime to get items where the specified field is equal to the specified value.
     *
     * Example: `?timestamp=2020-02-20T02:40:57Z`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a datetime to get items where the specified field is not equal to the specified value.
     *
     * Example: `?timestamp.ne=2020-02-20T02:40:57Z`.
     */
    ne?: string | null;
    /**
     * **Greater than** filter mode. \
     * Specify a datetime to get items where the specified field is greater than the specified value.
     *
     * Example: `?timestamp.gt=2020-02-20T02:40:57Z`.
     */
    gt?: string | null;
    /**
     * **Greater or equal** filter mode. \
     * Specify a datetime to get items where the specified field is greater than equal to the specified value.
     *
     * Example: `?timestamp.ge=2020-02-20T02:40:57Z`.
     */
    ge?: string | null;
    /**
     * **Less than** filter mode. \
     * Specify a datetime to get items where the specified field is less than the specified value.
     *
     * Example: `?timestamp.lt=2020-02-20T02:40:57Z`.
     */
    lt?: string | null;
    /**
     * **Less or equal** filter mode. \
     * Specify a datetime to get items where the specified field is less than or equal to the specified value.
     *
     * Example: `?timestamp.le=2020-02-20T02:40:57Z`.
     */
    le?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of datetimes to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?timestamp.in=2020-02-20,2020-02-21`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of datetimes to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?timestamp.ni=2020-02-20,2020-02-21`.
     */
    ni?: Array<string> | null;
};
