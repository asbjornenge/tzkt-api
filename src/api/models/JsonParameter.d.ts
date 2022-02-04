export declare type JsonParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a JSON value to get items where the specified field is equal to the specified value.
     *
     * Example: `?parameter.from=tz1...` or `?parameter.signatures.[3].[0]=null` or `?parameter.sigs.[*]=null`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a JSON value to get items where the specified field is not equal to the specified value.
     *
     * Example: `?parameter.ne=true` or `?parameter.amount.ne=0`.
     */
    ne?: string | null;
    /**
     * **Greater than** filter mode. \
     * Specify a string to get items where the specified field is greater than the specified value.
     * Note that all stored JSON values are strings, so this will be a comparison of two strings, so we recommend comparing values of the same type,
     * e.g. numeric strings with numeric strings (`parameter.number.gt=123`), datetime strings with datetime strings (`parameter.date.gt=2021-01-01`), etc.
     * Otherwise, result may surprise you.
     *
     * Example: `?parameter.balance.gt=1234` or `?parameter.time.gt=2021-02-01`.
     */
    gt?: string | null;
    /**
     * **Greater or equal** filter mode. \
     * Specify a string to get items where the specified field is greater than equal to the specified value.
     * Note that all stored JSON values are strings, so this will be a comparison of two strings, so we recommend comparing values of the same type,
     * e.g. numeric strings with numeric strings (`parameter.number.gt=123`), datetime strings with datetime strings (`parameter.date.gt=2021-01-01`), etc.
     * Otherwise, result may surprise you.
     *
     * Example: `?parameter.balance.ge=1234` or `?parameter.time.ge=2021-02-01`.
     */
    ge?: string | null;
    /**
     * **Less than** filter mode. \
     * Specify a string to get items where the specified field is less than the specified value.
     * Note that all stored JSON values are strings, so this will be a comparison of two strings, so we recommend comparing values of the same type,
     * e.g. numeric strings with numeric strings (`parameter.number.gt=123`), datetime strings with datetime strings (`parameter.date.gt=2021-01-01`), etc.
     * Otherwise, result may surprise you.
     *
     * Example: `?parameter.balance.lt=1234` or `?parameter.time.lt=2021-02-01`.
     */
    lt?: string | null;
    /**
     * **Less or equal** filter mode. \
     * Specify a string to get items where the specified field is less than or equal to the specified value.
     * Note that all stored JSON values are strings, so this will be a comparison of two strings, so we recommend comparing values of the same type,
     * e.g. numeric strings with numeric strings (`parameter.number.gt=123`), datetime strings with datetime strings (`parameter.date.gt=2021-01-01`), etc.
     * Otherwise, result may surprise you.
     *
     * Example: `?parameter.balance.le=1234` or `?parameter.time.le=2021-02-01`.
     */
    le?: string | null;
    /**
     * **Same as** filter mode. \
     * Specify a string template to get items where the specified field matches the specified template. \
     * This mode supports wildcard `*`. Use `\*` as an escape symbol.
     *
     * Example: `?parameter.as=*mid*` or `?parameter.as=*end`.
     */
    as?: string | null;
    /**
     * **Unlike** filter mode. \
     * Specify a string template to get items where the specified field doesn't match the specified template.
     * This mode supports wildcard `*`. Use `\*` as an escape symbol.
     *
     * Example: `?parameter.un=*mid*` or `?parameter.un=*end`.
     */
    un?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of strings or JSON array to get items where the specified field is equal to one of the specified values. \
     *
     * Example: `?parameter.amount.in=1,2,3` or `?parameter.in=[{"from":"tz1","to":"tz2"},{"from":"tz2","to":"tz1"}]`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of strings to get items where the specified field is not equal to all the specified values. \
     * Use `\,` as an escape symbol.
     *
     * Example: `?parameter.amount.ni=1,2,3` or `?parameter.ni=[{"from":"tz1","to":"tz2"},{"from":"tz2","to":"tz1"}]`.
     */
    ni?: Array<string> | null;
    /**
     * **Is null** filter mode. \
     * Use this mode to get items where the specified field is null or not.
     *
     * Example: `?parameter.null` or `?parameter.null=false` or `?parameter.sigs.[0].null=false`.
     */
    null?: boolean;
};
