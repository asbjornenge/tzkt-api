import type { OperationError } from './OperationError.js';
export declare type ExpressionAlreadyRegisteredError = (OperationError & {
    /**
     * Type of an error, `Expression_already_registered` - an operation tried to register
     * an already existing global consant
     * https://tezos.gitlab.io/api/errors.html - full list of errors
     */
    type?: string | null;
    /**
     * Global address of the constant
     */
    expression?: string | null;
});
