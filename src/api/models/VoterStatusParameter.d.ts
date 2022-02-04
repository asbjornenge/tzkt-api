export declare type VoterStatusParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a voter status to get items where the specified field is equal to the specified value.
     *
     * Example: `?status=none`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a voter status to get items where the specified field is not equal to the specified value.
     *
     * Example: `?status.ne=none`.
     */
    ne?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of voter statuses to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?status.in=voted_yay,voted_nay`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of voter statuses to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?status.ni=none,upvoted`.
     */
    ni?: Array<string> | null;
};
