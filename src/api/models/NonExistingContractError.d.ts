import type { OperationError } from './OperationError.js';
export declare type NonExistingContractError = (OperationError & {
    /**
     * Type of an error, `contract.non_existing_contract` - the operation was sent to non-existent contract
     * https://tezos.gitlab.io/api/errors.html - full list of errors
     */
    type?: string | null;
    /**
     * Public key hash of the account to which in the operation tried to send to
     */
    contract?: string | null;
});
