import type { Alias } from './Alias.js';
export declare type Commitment = {
    /**
     * Blinded address of the account
     */
    address?: string | null;
    /**
     * Account balance to be activated
     */
    balance?: number;
    /**
     * Flag showing whether the account has been activated or not.
     */
    activated?: boolean;
    /**
     * Level of the block at which the account has been activated. `null` if the account is not activated yet.
     */
    activationLevel?: number | null;
    /**
     * Datetime of the block at which the account has been activated (ISO 8601, e.g. `2020-02-20T02:40:57Z`). `null` if the account is not activated yet.
     */
    activationTime?: string | null;
    /**
     * Info about activated account. `null` if the account is not activated yet.
     */
    activatedAccount?: Alias | null;
};
