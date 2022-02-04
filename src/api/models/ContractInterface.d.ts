import type { BigMapInterface } from './BigMapInterface.js';
import type { EntrypointInterface } from './EntrypointInterface.js';
import type { RawJson } from './RawJson.js';
export declare type ContractInterface = {
    /**
     * JSON Schema of the contract storage in humanified format (as returned by API)
     */
    storageSchema?: RawJson | null;
    /**
     * List of terminal entrypoints
     */
    entrypoints?: Array<EntrypointInterface> | null;
    /**
     * List of currently available Big_maps
     */
    bigMaps?: Array<BigMapInterface> | null;
};
