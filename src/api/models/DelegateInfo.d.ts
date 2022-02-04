export declare type DelegateInfo = {
    /**
     * Name of the baking service
     */
    alias?: string | null;
    /**
     * Public key hash of the delegate (baker)
     */
    address?: string | null;
    /**
     * Delegation status (`true` - active, `false` - deactivated)
     */
    active?: boolean;
};
