export declare type StringParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a string to get items where the specified field is equal to the specified value.
     *
     * Example: `?parameters=abc`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a string to get items where the specified field is not equal to the specified value.
     *
     * Example: `?parameters.ne=abc`.
     */
    ne?: string | null;
    /**
     * **Same as** filter mode. \
     * Specify a string template to get items where the specified field matches the specified template. \
     * This mode supports wildcard `*`. Use `\*` as an escape symbol.
     *
     * Example: `?parameters.as=*mid*` or `?parameters.as=*end`.
     */
    as?: string | null;
    /**
     * **Unlike** filter mode. \
     * Specify a string template to get items where the specified field doesn't match the specified template.
     * This mode supports wildcard `*`. Use `\*` as an escape symbol.
     *
     * Example: `?parameters.un=*mid*` or `?parameters.un=*end`.
     */
    un?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of strings to get items where the specified field is equal to one of the specified values. \
     * Use `\,` as an escape symbol.
     *
     * Example: `?errors.in=bla,bal,abl`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of strings to get items where the specified field is not equal to all the specified values. \
     * Use `\,` as an escape symbol.
     *
     * Example: `?errors.ni=bla,bal,abl`.
     */
    ni?: Array<string> | null;
    /**
     * **Is null** filter mode. \
     * Use this mode to get items where the specified field is null or not.
     *
     * Example: `?parameters.null` or `?parameters.null=false`.
     */
    null?: boolean | null;
};
