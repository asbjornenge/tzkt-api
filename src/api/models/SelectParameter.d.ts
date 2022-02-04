export declare type SelectParameter = {
    /**
     * **Fields** selection mode (optional, i.e. `select.fields=balance` is the same as `select=balance`). \
     * Specify a comma-separated list of fields to include into response.
     *
     * Example: `?select=address,balance` =&gt; `[ { "address": "asd", "balance": 10 } ]`.
     */
    fields?: Array<string> | null;
    /**
     * **Values** selection mode. \
     * Specify a comma-separated list of fields to include their values into response.
     *
     * Example: `?select.values=address,balance` =&gt; `[ [ "asd", 10 ] ]`.
     */
    values?: Array<string> | null;
};
