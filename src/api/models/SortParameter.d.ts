export declare type SortParameter = {
    /**
     * **Ascending** sort mode (optional, i.e. `sort.asc=id` is the same as `sort=id`). \
     * Specify a field name to sort by.
     *
     * Example: `?sort=balance`.
     */
    asc?: string | null;
    /**
     * **Descending** sort mode. \
     * Specify a field name to sort by descending.
     *
     * Example: `?sort.desc=id`.
     */
    desc?: string | null;
};
