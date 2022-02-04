import type { IMicheline } from './IMicheline.js';
export declare type Entrypoint = {
    /**
     * Entrypoint name
     */
    name?: string | null;
    /**
     * A kind of JSON schema, describing how parameters will look like in a human-readable JSON format
     */
    jsonParameters?: any;
    /**
     * Parameters schema in micheline format
     */
    michelineParameters?: IMicheline | null;
    /**
     * Parameters schema in michelson format
     */
    michelsonParameters?: string | null;
    /**
     * Unused means that the entrypoint can be normalized to a more specific one.
     * For example here `(or %entry1 (unit %entry2) (nat %entry3))` the `%entry1` is unused entrypoint
     * because it can be normalized to `%entry2` or `%entry3`
     */
    unused?: boolean;
};
