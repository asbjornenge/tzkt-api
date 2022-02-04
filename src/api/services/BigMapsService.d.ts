import type { AccountParameter } from '../models/AccountParameter.js';
import type { BigMap } from '../models/BigMap.js';
import type { BigMapActionParameter } from '../models/BigMapActionParameter.js';
import type { BigMapKey } from '../models/BigMapKey.js';
import type { BigMapKeyHistorical } from '../models/BigMapKeyHistorical.js';
import type { BigMapKeyUpdate } from '../models/BigMapKeyUpdate.js';
import type { BigMapTagsParameter } from '../models/BigMapTagsParameter.js';
import type { BigMapUpdate } from '../models/BigMapUpdate.js';
import type { Int32Parameter } from '../models/Int32Parameter.js';
import type { JsonParameter } from '../models/JsonParameter.js';
import type { MichelineFormat } from '../models/MichelineFormat.js';
import type { MichelinePrim } from '../models/MichelinePrim.js';
import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { SelectParameter } from '../models/SelectParameter.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { StringParameter } from '../models/StringParameter.js';
import type { TimestampParameter } from '../models/TimestampParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class BigMapsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get bigmaps count
     * Returns the total number of bigmaps.
     * @returns number
     * @throws ApiError
     */
    bigMapsGetBigMapsCount(): CancelablePromise<number>;
    /**
     * Get bigmaps
     * Returns a list of bigmaps.
     * @returns BigMap
     * @throws ApiError
     */
    bigMapsGetBigMaps({ contract, path, tags, active, lastLevel, select, sort, offset, limit, micheline, }: {
        /** Filters bigmaps by smart contract address. **/
        contract?: AccountParameter | null;
        /** Filters bigmaps by path in the contract storage. **/
        path?: StringParameter | null;
        /** Filters bigmaps by tags: `token_metadata` - tzip-12, `metadata` - tzip-16. **/
        tags?: BigMapTagsParameter | null;
        /** Filters bigmaps by status: `true` - active, `false` - removed. **/
        active?: boolean | null;
        /** Filters bigmaps by the last update level. **/
        lastLevel?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts bigmaps by specified field. Supported fields: `id` (default), `ptr`, `firstLevel`, `lastLevel`, `totalKeys`, `activeKeys`, `updates`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value type: `0` - JSON, `2` - Micheline **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMap>>;
    /**
     * Get bigmap updates
     * Returns a list of all bigmap updates.
     * @returns BigMapUpdate
     * @throws ApiError
     */
    bigMapsGetBigMapUpdates({ bigmap, path, contract, tags, action, value, level, timestamp, sort, offset, limit, micheline, }: {
        /** Filters updates by bigmap ptr **/
        bigmap?: Int32Parameter | null;
        /** Filters updates by bigmap path **/
        path?: StringParameter | null;
        /** Filters updates by bigmap contract **/
        contract?: AccountParameter | null;
        /** Filters updates by bigmap tags: `token_metadata` - tzip-12, `metadata` - tzip-16 **/
        tags?: BigMapTagsParameter | null;
        /** Filters updates by action **/
        action?: BigMapActionParameter | null;
        /** Filters updates by JSON value. Note, this query parameter supports the following format: `?value{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?value.balance.gt=...`. **/
        value?: JsonParameter | null;
        /** Filters updates by level **/
        level?: Int32Parameter | null;
        /** Filters updates by timestamp. **/
        timestamp?: TimestampParameter | null;
        /** Sorts bigmaps by specified field. Supported fields: `id` (default), `ptr`, `firstLevel`, `lastLevel`, `totalKeys`, `activeKeys`, `updates`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value type: `0` - JSON, `2` - Micheline **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapUpdate>>;
    /**
     * Get bigmap by Id
     * Returns a bigmap with the specified Id.
     * @returns BigMap
     * @throws ApiError
     */
    bigMapsGetBigMapById({ id, micheline, }: {
        /** Bigmap Id **/
        id: number;
        /** Format of the bigmap key and value type: `0` - JSON, `2` - Micheline **/
        micheline?: MichelineFormat;
    }): CancelablePromise<BigMap>;
    /**
     * Get bigmap type
     * Returns a type of the bigmap with the specified Id in Micheline format (with annotations).
     * @returns MichelinePrim
     * @throws ApiError
     */
    bigMapsGetBigMapType({ id, }: {
        /** Bigmap Id **/
        id: number;
    }): CancelablePromise<MichelinePrim>;
    /**
     * Get bigmap keys
     * Returns a list of bigmap keys.
     * @returns BigMapKey
     * @throws ApiError
     */
    bigMapsGetKeys({ id, active, key, value, lastLevel, select, sort, offset, limit, micheline, }: {
        /** Bigmap Id **/
        id: number;
        /** Filters keys by status: `true` - active, `false` - removed. **/
        active?: boolean | null;
        /** Filters keys by JSON key. Note, this query parameter supports the following format: `?key{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?key.token_id=...`. **/
        key?: JsonParameter | null;
        /** Filters keys by JSON value. Note, this query parameter supports the following format: `?value{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?value.balance.gt=...`. **/
        value?: JsonParameter | null;
        /** Filters bigmap keys by the last update level. **/
        lastLevel?: Int32Parameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts bigmap keys by specified field. Supported fields: `id` (default), `firstLevel`, `lastLevel`, `updates`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapKey>>;
    /**
     * Get bigmap key
     * Returns the specified bigmap key.
     * @returns BigMapKey
     * @throws ApiError
     */
    bigMapsGetKey({ id, key, micheline, }: {
        /** Bigmap Id **/
        id: number;
        /** Either a key hash (`expr123...`) or a plain value (`abcde...`).
         * Even if the key is complex (an object or an array), you can specify it as is, for example, `/keys/{"address":"tz123","nat":"123"}`. **/
        key: string | null;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<BigMapKey>;
    /**
     * Get bigmap key updates
     * Returns updates history for the specified bigmap key.
     * @returns BigMapKeyUpdate
     * @throws ApiError
     */
    bigMapsGetKeyUpdates({ id, key, sort, offset, limit, micheline, }: {
        /** Bigmap Id **/
        id: number;
        /** Either a key hash (`expr123...`) or a plain value (`abcde...`).
         * Even if the key is complex (an object or an array), you can specify it as is, for example, `/keys/{"address":"tz123","nat":"123"}`. **/
        key: string | null;
        /** Sorts bigmap updates by specified field. Supported fields: `id` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the key value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapKeyUpdate>>;
    /**
     * Get historical keys
     * Returns a list of bigmap keys at the specific block.
     * @returns BigMapKeyHistorical
     * @throws ApiError
     */
    bigMapsGetHistoricalKeys({ id, level, active, key, value, select, sort, offset, limit, micheline, }: {
        /** Bigmap Id **/
        id: number;
        /** Level of the block at which you want to get bigmap keys **/
        level: number;
        /** Filters keys by status: `true` - active, `false` - removed. **/
        active?: boolean | null;
        /** Filters keys by JSON key. Note, this query parameter supports the following format: `?key{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?key.token_id=...`. **/
        key?: JsonParameter | null;
        /** Filters keys by JSON value. Note, this query parameter supports the following format: `?value{.path?}{.mode?}=...`,
         * so you can specify a path to a particular field to filter by, for example: `?value.balance.gt=...`. **/
        value?: JsonParameter | null;
        /** Specify comma-separated list of fields to include into response or leave it undefined to return full object. If you select single field, response will be an array of values in both `.fields` and `.values` modes. **/
        select?: SelectParameter | null;
        /** Sorts bigmap keys by specified field. Supported fields: `id` (default). **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<Array<BigMapKeyHistorical>>;
    /**
     * Get historical key
     * Returns the specified bigmap key at the specific block.
     * @returns BigMapKeyHistorical
     * @throws ApiError
     */
    bigMapsGetKey2({ id, level, key, micheline, }: {
        /** Bigmap Id **/
        id: number;
        /** Level of the block at which you want to get bigmap key **/
        level: number;
        /** Either a key hash (`expr123...`) or a plain value (`abcde...`).
         * Even if the key is complex (an object or an array), you can specify it as is, for example, `/keys/{"address":"tz123","nat":"123"}`. **/
        key: string | null;
        /** Format of the bigmap key and value: `0` - JSON, `1` - JSON string, `2` - Micheline, `3` - Micheline string **/
        micheline?: MichelineFormat;
    }): CancelablePromise<BigMapKeyHistorical>;
}
