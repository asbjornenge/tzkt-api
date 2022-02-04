import type { OperationError } from './OperationError.js';
export declare type BaseOperationError = (OperationError & {
    /**
     * Type of an error
     * https://tezos.gitlab.io/api/errors.html - full list of errors
     */
    type?: string | null;
});
