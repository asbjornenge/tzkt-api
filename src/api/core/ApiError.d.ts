import type { ApiResult } from './ApiResult.js';
export declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    constructor(response: ApiResult, message: string);
}
