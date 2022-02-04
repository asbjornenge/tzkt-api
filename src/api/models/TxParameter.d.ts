export declare type TxParameter = {
    /**
     * Entrypoint called on the target contract
     */
    entrypoint?: string | null;
    /**
     * Value passed to the called entrypoint converted to human-readable JSON. Note: you can configure parameters format by setting `micheline` query parameter.
     */
    value?: any;
};
