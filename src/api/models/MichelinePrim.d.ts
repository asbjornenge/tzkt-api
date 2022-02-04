import type { IAnnotation } from './IAnnotation.js';
import type { IMicheline } from './IMicheline.js';
import type { PrimType } from './PrimType.js';
export declare type MichelinePrim = {
    prim?: PrimType;
    args?: Array<IMicheline> | null;
    annots?: Array<IAnnotation> | null;
};
