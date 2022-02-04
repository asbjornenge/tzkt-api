export declare type OffsetParameter = {
    /**
     * **Elements** offset mode (optional, i.e. `offset.el=123` is the same as `offset=123`). \
     * Skips specified number of elements.
     *
     * Example: `?offset=100`.
     */
    el?: number | null;
    /**
     * **Page** offset mode. \
     * Skips `page * limit` elements. This is a classic pagination.
     *
     * Example: `?offset.pg=1`.
     */
    pg?: number | null;
    /**
     * **Cursor** offset mode. \
     * Skips all elements with the `cursor` before (including) the specified value. Cursor is a field used for sorting, e.g. `id`.
     * Avoid using this offset mode with non-unique or non-sequential cursors such as `amount`, `balance`, etc.
     *
     * Example: `?offset.cr=45837`.
     */
    cr?: number | null;
};
