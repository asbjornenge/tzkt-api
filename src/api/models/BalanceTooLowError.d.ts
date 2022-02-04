import type { OperationError } from './OperationError.js';
export declare type BalanceTooLowError = (OperationError & {
    /**
     * Type of an error, `contract.balance_too_low` - an operation tried to spend more then the contract has
     * https://tezos.gitlab.io/api/errors.html - full list of errors
     */
    type?: string | null;
    /**
     * Balance of the contract
     */
    balance?: number;
    /**
     * Required balance to send the operation
     */
    required?: number;
});
