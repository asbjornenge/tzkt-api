import type { OperationError } from './OperationError.js';
export declare type UnregisteredDelegateError = (OperationError & {
    /**
     * Type of an error, `contract.manager.unregistered_delegate` - an operation of delegation was sent to an account,
     * not registered as a delegate (baker)
     * https://tezos.gitlab.io/api/errors.html - full list of errors
     */
    type?: string | null;
    /**
     * Public key hash of the account to which in the operation tried to delegate to
     */
    delegate?: string | null;
});
