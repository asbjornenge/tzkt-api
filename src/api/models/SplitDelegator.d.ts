export declare type SplitDelegator = {
    /**
     * Address of the delegator
     */
    address?: string | null;
    /**
     * Balance of the delegator at the snapshot time
     */
    balance?: number;
    /**
     * Balance of the delegator at the moment
     */
    currentBalance?: number;
    /**
     * Indicates whether the delegator is emptied (at the moment, not at the snapshot time).
     * Emptied accounts (users with zero balance) should be re-allocated, so if you make payment to emptied account you will pay (burn) `0.257 tez` allocation fee.
     */
    emptied?: boolean;
};
