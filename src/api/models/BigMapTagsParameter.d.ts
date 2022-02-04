export declare type BigMapTagsParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a comma-separated list of bigmap tags to get bigmaps with exactly the same set of tags.
     *
     * Example: `?tags=metadata` or `?tags=token_metadata,metadata`.
     */
    eq?: Array<string> | null;
    /**
     * **Has any** filter mode. \
     * Specify a comma-separated list of bigmap tags to get bigmaps where at least one of the specified tags is presented.
     *
     * Example: `?tags=metadata` or `?tags=token_metadata,metadata`.
     */
    any?: Array<string> | null;
    /**
     * **Has all** filter mode. \
     * Specify a comma-separated list of bigmap tags to get bigmaps where all of the specified tags are presented.
     *
     * Example: `?tags=metadata` or `?tags=token_metadata,metadata`.
     */
    all?: Array<string> | null;
};
