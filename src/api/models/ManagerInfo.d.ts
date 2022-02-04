export declare type ManagerInfo = {
    /**
     * Name of the project behind the account or account description
     */
    alias?: string | null;
    /**
     * Public key hash of the account
     */
    address?: string | null;
    /**
     * Base58 representation of account's public key, revealed by the account
     */
    publicKey?: string | null;
};
