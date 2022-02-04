export declare type AccountParameter = {
    /**
     * **Equal** filter mode (optional, i.e. `param.eq=123` is the same as `param=123`). \
     * Specify a `tz` or `KT` address to get items where the specified field is equal to the specified value.
     *
     * Example: `?sender=tz1WnfXMPaNTBmH7DBPwqCWs9cPDJdkGBTZ8`.
     */
    eq?: string | null;
    /**
     * **Not equal** filter mode. \
     * Specify a `tz` or `KT` address to get items where the specified field is not equal to the specified value.
     *
     * Example: `?sender.ne=tz1WnfXMPaNTBmH7DBPwqCWs9cPDJdkGBTZ8`.
     */
    ne?: string | null;
    /**
     * **In list** (any of) filter mode. \
     * Specify a comma-separated list of addresses to get items where the specified field is equal to one of the specified values.
     *
     * Example: `?sender.in=tz1WnfXMPaNTB,tz1SiPXX4MYGNJND`.
     */
    in?: Array<string> | null;
    /**
     * **Not in list** (none of) filter mode. \
     * Specify a comma-separated list of addresses to get items where the specified field is not equal to all the specified values.
     *
     * Example: `?sender.ni=tz1WnfXMPaNTB,tz1SiPXX4MYGNJND`.
     */
    ni?: Array<string> | null;
    /**
     * **Equal to another field** filter mode. \
     * Specify a field name to get items where the specified fields are equal.
     *
     * Example: `?sender.eqx=target`.
     */
    eqx?: string | null;
    /**
     * **Not equal to another field** filter mode. \
     * Specify a field name to get items where the specified fields are not equal.
     *
     * Example: `?sender.nex=initiator`.
     */
    nex?: string | null;
    /**
     * **Is null** filter mode. \
     * Use this mode to get items where the specified field is null or not.
     *
     * Example: `?initiator.null` or `?initiator.null=false`.
     */
    null?: boolean | null;
};
