import type { AccountParameter } from '../models/AccountParameter.js';
import type { Block } from '../models/Block.js';
import type { DateTimeParameter } from '../models/DateTimeParameter.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { MichelineFormat } from '../models/MichelineFormat.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { Symbols } from '../models/Symbols.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class BlocksService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get blocks count
     * Returns the total number of blocks.
     * @returns number
     * @throws ApiError
     */
    blocksGetCount(): CancelablePromise<number>;
    /**
     * Get blocks
     * Returns a list of blocks.
     * @returns Block
     * @throws ApiError
     */
    blocksGet({ baker, level, timestamp, priority, select, sort, offset, limit, quote, }: {
        /** Filters blocks by baker. Allowed fields for `.eqx` mode: none. **/
        baker?: AccountParameter | null;
        /** Filters blocks by level. **/
        level?: Int32Parameter | null;
        /** Filters blocks by timestamp. **/
        timestamp?: DateTimeParameter | null;
        /** Filters blocks by priority. **/
        priority?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts blocks by specified field. Supported fields: `id` (default), `level`, `priority`, `validations`, `reward`, `fees`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Array<Block>>;
    /**
     * Get block by hash
     * Returns a block with the specified hash.
     * @returns Block
     * @throws ApiError
     */
    blocksGetByHash({ hash, operations, micheline, quote, }: {
        /** Block hash **/
        hash: string | null;
        /** Flag indicating whether to include block operations into returned object or not **/
        operations?: boolean;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Block>;
    /**
     * Get block by level
     * Returns a block at the specified level.
     * @returns Block
     * @throws ApiError
     */
    blocksGetByLevel({ level, operations, micheline, quote, }: {
        /** Block level **/
        level: number;
        /** Flag indicating whether to include block operations into returned object or not **/
        operations?: boolean;
        /** Format of the parameters, storage and diffs: `0` - JSON, `1` - JSON string, `2` - raw micheline, `3` - raw micheline string **/
        micheline?: MichelineFormat;
        /** Comma-separated list of ticker symbols to inject historical prices into response **/
        quote?: Symbols;
    }): CancelablePromise<Block>;
}
