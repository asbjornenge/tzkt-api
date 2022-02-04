import type { RawJson } from './RawJson.js';
export declare type BigMapInterface = {
    /**
     * Full path to the Big_map in the contract storage
     */
    path?: string | null;
    /**
     * Big_map name, if exists (field annotation)
     */
    name?: string | null;
    /**
     * JSON Schema of the Big_map key in humanified format (as returned by API)
     */
    keySchema?: RawJson | null;
    /**
     * JSON Schema of the Big_map value in humanified format (as returned by API)
     */
    valueSchema?: RawJson | null;
};
