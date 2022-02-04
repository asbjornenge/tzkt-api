import type { RawJson } from './RawJson.js';
export declare type EntrypointInterface = {
    /**
     * Entrypoint name
     */
    name?: string | null;
    /**
     * JSON Schema of the entrypoint parameter in humanified format (as returned by API)
     */
    parameterSchema?: RawJson | null;
};
