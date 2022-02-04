export declare type OriginatedContract = {
    /**
     * Kind of the contract (`delegator_contract` or `smart_contract`),
     * where `delegator_contract` - manager.tz smart contract for delegation purpose only
     */
    kind?: string | null;
    /**
     * Name of the project behind the contract or contract description
     */
    alias?: string | null;
    /**
     * Public key hash of the contract
     */
    address?: string | null;
    /**
     * 32-bit hash of the contract parameter and storage types.
     * This field can be used for searching similar contracts (which have the same interface).
     */
    typeHash?: number;
    /**
     * 32-bit hash of the contract code.
     * This field can be used for searching same contracts (which have the same script).
     */
    codeHash?: number;
};
