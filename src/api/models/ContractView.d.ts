import type { IMicheline } from './IMicheline.js';
export declare type ContractView = {
    /**
     * Contract view name
     */
    name?: string | null;
    /**
     * Parameter type in human-readable JSON format
     */
    jsonParameterType?: any;
    /**
     * Return type in human-readable JSON format
     */
    jsonReturnType?: any;
    /**
     * Parameter type in micheline format
     */
    michelineParameterType?: IMicheline | null;
    /**
     * Return type in micheline format
     */
    michelineReturnType?: IMicheline | null;
    /**
     * Parameter type in michelson format
     */
    michelsonParameterType?: string | null;
    /**
     * Return type in michelson format
     */
    michelsonReturnType?: string | null;
};
