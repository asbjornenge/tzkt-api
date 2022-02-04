import type { QuoteShort } from './QuoteShort.js';
export declare type HistoricalBalance = {
    /**
     * Height of the block at which the account balance was calculated
     */
    level?: number;
    /**
     * Timestamp of the block at which the account balance was calculated
     */
    timestamp?: string;
    /**
     * Historical balance
     */
    balance?: number;
    /**
     * Injected historical quote at the time of balance snapshot
     */
    quote?: QuoteShort | null;
};
