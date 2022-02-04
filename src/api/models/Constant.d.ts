import type { Alias } from './Alias.js';
import type { RawJson } from './RawJson.js';
export declare type Constant = {
    /**
     * Global address (expression hash)
     */
    address?: string | null;
    /**
     * Constant value (either micheline, michelson or bytes, depending on the `format` parameter)
     */
    value?: any;
    /**
     * Constant size in bytes
     */
    size?: number;
    /**
     * Number of contracts referencing this constant
     */
    refs?: number;
    /**
     * Account registered this constant
     */
    creator?: Alias | null;
    /**
     * Level of the first block baked with this software
     */
    creationLevel?: number;
    /**
     * Datetime of the first block baked with this software
     */
    creationTime?: string;
    /**
     * Offchain metadata
     */
    metadata?: RawJson | null;
};
