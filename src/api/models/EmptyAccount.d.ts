import type { Account } from './Account.js';
export declare type EmptyAccount = (Account & {
    /**
     * Type of the account, `empty` - account hasn't appeared in the blockchain yet
     */
    type?: string | null;
    /**
     * Public key hash of the account
     */
    address?: string | null;
    /**
     * An account nonce which is used to prevent operation replay
     */
    counter?: number;
});
