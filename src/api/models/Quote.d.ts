export declare type Quote = {
    /**
     * The level of the block at which the quote has been saved
     */
    level?: number;
    /**
     * The datetime at which the quote has been saved (ISO 8601, e.g. `2020-02-20T02:40:57Z`)
     */
    timestamp?: string;
    /**
     * XTZ/BTC price
     */
    btc?: number;
    /**
     * XTZ/EUR price
     */
    eur?: number;
    /**
     * XTZ/USD price
     */
    usd?: number;
    /**
     * XTZ/CNY price
     */
    cny?: number;
    /**
     * XTZ/JPY price
     */
    jpy?: number;
    /**
     * XTZ/KRW price
     */
    krw?: number;
    /**
     * XTZ/ETH price
     */
    eth?: number;
    /**
     * XTZ/GBP price
     */
    gbp?: number;
};
