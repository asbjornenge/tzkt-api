export declare type Delegator = {
    /**
     * Delegator type ('contract' for KT.. address or 'user' for tz.. address)
     */
    type?: string | null;
    /**
     * Name of the project behind the account or account description
     */
    alias?: string | null;
    /**
     * Public key hash of the account
     */
    address?: string | null;
    /**
     * Account balance (micro tez)
     */
    balance?: number;
    /**
     * Block height of last delegation operation
     */
    delegationLevel?: number;
    /**
     * Block datetime of last delegation operation (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    delegationTime?: string;
};
