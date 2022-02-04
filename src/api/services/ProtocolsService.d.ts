import type { OffsetParameter } from '../models/OffsetParameter.js';
import type { Protocol } from '../models/Protocol.js';
import type { SortParameter } from '../models/SortParameter.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class ProtocolsService {
    private readonly httpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get protocols count
     * Returns the total number of protocols.
     * @returns number
     * @throws ApiError
     */
    protocolsGetCount(): CancelablePromise<number>;
    /**
     * Get protocols
     * Returns a list of protocols.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGet({ sort, offset, limit, }: {
        /** Sorts protocols by specified field. Supported fields: `code` (default), `firstLevel`, `lastLevel`. **/
        sort?: SortParameter | null;
        /** Specifies which or how many items should be skipped **/
        offset?: OffsetParameter | null;
        /** Maximum number of items to return **/
        limit?: number;
    }): CancelablePromise<Array<Protocol>>;
    /**
     * Get current protocol
     * Returns current protocol.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetCurrent(): CancelablePromise<Protocol>;
    /**
     * Get protocol by code
     * Returns a protocol with the specified proto code.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetByCode({ code, }: {
        /** Protocol code (e.g. 4 for Athens, 5 for Babylon, etc) **/
        code: number;
    }): CancelablePromise<Protocol>;
    /**
     * Get protocol by hash
     * Returns a protocol with the specified hash.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetByHash({ hash, }: {
        /** Protocol hash **/
        hash: string | null;
    }): CancelablePromise<Protocol>;
    /**
     * Get protocol by cycle
     * Returns a protocol at the specified cycle.
     * @returns Protocol
     * @throws ApiError
     */
    protocolsGetByCycle({ cycle, }: {
        /** Cycle index **/
        cycle: number;
    }): CancelablePromise<Protocol>;
}
