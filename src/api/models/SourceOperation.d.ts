import type { TxParameter } from './TxParameter.js';
export declare type SourceOperation = {
    /**
     * Operation type
     */
    type?: string | null;
    /**
     * Operation hash
     */
    hash?: string | null;
    /**
     * Operation counter (null in case of synthetic operations)
     */
    counter?: number | null;
    /**
     * Operation nonce (null in case of non-internal or synthetic operations)
     */
    nonce?: number | null;
    /**
     * Transaction parameter, including called entrypoint and value passed to the entrypoint.
     */
    parameter?: TxParameter | null;
};
