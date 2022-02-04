import FormData from 'form-data';
import { BodyInit, Headers, Response } from 'node-fetch';
import type { ApiRequestOptions } from './ApiRequestOptions.js';
import { CancelablePromise } from './CancelablePromise.js';
import type { OnCancel } from './CancelablePromise.js';
import type { OpenAPIConfig } from './OpenAPI.js';
export declare const sendRequest: (options: ApiRequestOptions, url: string, formData: FormData | undefined, body: BodyInit | undefined, headers: Headers, onCancel: OnCancel) => Promise<Response>;
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export declare const request: <T>(config: OpenAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>;
