//import {
//    ActivationOperation,
//    BallotOperation,
//    DelegationOperation,
//    DoubleBakingOperation,
//    DoubleEndorsingOperation,
//    EndorsementOperation,
//    NonceRevelationOperation,
//    OriginationOperation,
//    ProposalOperation,
//    RevealOperation,
//    TransactionOperation,
//    BigMapUpdate,
//    State,
//    Block
//} from '@dipdup/tzkt-api'

export const EventType = {
    Init: 0,
    Data: 1,
    Reorg: 2
}

//export interface Event {
//    type: EventType;
//    state: number;
//}
//
//export interface Message extends Event {
//    data?: ResponseTypes;
//}
//
//export type OperationTypes = 
//    ActivationOperation | 
//    BallotOperation | 
//    DelegationOperation | 
//    DoubleBakingOperation | 
//    DoubleEndorsingOperation | 
//    EndorsementOperation | 
//    NonceRevelationOperation | 
//    OriginationOperation | 
//    ProposalOperation | 
//    RevealOperation | 
//    TransactionOperation;
//
//export class OperationParameters {
//    readonly address?: string;
//    readonly types?: Array<OperationKind>;
//
//    constructor(address?: string, types?: Array<OperationKind>) {
//        this.address = address;
//        this.types = types;
//    }
//
//    public is(operation: OperationTypes): boolean {
//        if (this.address) {
//            switch (operation.type) {
//                case 'activation': {
//                    return this.isActivation(operation, this.address);
//                }
//                case 'ballot': {
//                    return this.isBallot(operation, this.address);
//                }
//                case 'delegation': {
//                    return this.isDelegation(operation, this.address);
//                }
//                case 'double_baking': {
//                    return this.isDoubleBaking(operation, this.address);
//                }
//                case 'double_endorsing': {
//                    return this.isDoubleEndorsing(operation, this.address);
//                }
//                case 'endorsement': {
//                    return this.isEndorsement(operation, this.address);
//                }
//                case 'nonce_revelation': {
//                    return this.isNonceRevelation(operation, this.address);
//                }
//                case 'origination': {
//                    return this.isOrigination(operation, this.address);
//                }
//                case 'proposal': {
//                    return this.isProposal(operation, this.address);
//                }
//                case 'reveal': {
//                    return this.isReveal(operation, this.address);
//                }
//                case 'transaction': {
//                    return this.isTransaction(operation, this.address);
//                }
//            }
//        }
//        if (this.types) {
//            let found = false;
//            for (const typ in this.types) {
//                found = typ === operation.type
//                if (found) { break }
//            }
//            if (!found) { return false; }
//        }
//        return true;
//    }
//
//    private isActivation(operation: ActivationOperation, address: string): boolean {
//        return operation.account?.address === address;
//    }
//
//    private isBallot(operation: BallotOperation, address: string): boolean {
//        return operation.delegate?.address === address;
//    }
//
//    private isDelegation(operation: DelegationOperation, address: string): boolean {
//        return operation.sender?.address === address;
//    }
//
//    private isDoubleBaking(operation: DoubleBakingOperation, address: string): boolean {
//        return operation.accuser?.address === address || operation.offender?.address === address;
//    }
//
//    private isDoubleEndorsing(operation: DoubleEndorsingOperation, address: string): boolean {
//        return operation.accuser?.address === address || operation.offender?.address === address;
//    }
//
//    private isEndorsement(operation: EndorsementOperation, address: string): boolean {
//        return operation.delegate?.address === address;
//    }
//
//    private isNonceRevelation(operation: NonceRevelationOperation, address: string): boolean {
//        return operation.baker?.address === address || operation.sender?.address == address;
//    }
//
//    private isOrigination(operation: OriginationOperation, address: string): boolean {
//        return operation.sender?.address === address || operation.originatedContract?.address == address;
//    }
//
//    private isProposal(operation: ProposalOperation, address: string): boolean {
//        return operation.delegate?.address === address;
//    }
//
//    private isReveal(operation: RevealOperation, address: string): boolean {
//        return operation.sender?.address === address;
//    }
//
//    private isTransaction(operation: TransactionOperation, address: string): boolean {
//        return operation.sender?.address === address || operation.target?.address === address;
//    }
//}
//
//export class BigMapParameters {
//    readonly ptr?: number;
//    readonly contract?: string;
//    readonly path?: string;
//    readonly tags?: Array<BigMapTag>;
//
//    constructor(contract?: string, ptr?: number, path?: string, tags?: Array<BigMapTag>) {
//        this.contract = contract;
//        this.ptr = ptr;
//        this.path = path;
//        this.tags = tags;
//    }
//
//    public is(update: BigMapUpdate): boolean {
//        if (this.contract) {
//            if (this.contract !== update.contract) { return false; }
//        }
//        if (this.ptr) {
//            if (this.ptr !== update.bigmap) { return false; }
//        }
//        if (this.path) {
//            if (!update.path?.startsWith(this.path)) { return false; }
//        }
//        // TODO: filter by tags
//        return true;
//    }
//}
//
//export interface EventsConfig {
//    readonly url: string;
//    readonly reconnect: boolean;
//}

export const BIGMAPTAG = {
  METADATA: 'metadata',
  TOKEN_METADATA: 'token_metadata'
}

export const CHANNEL = {
  HEAD: 'head',
  BLOCKS: 'blocks',
  OPERATIONS: 'operations',
  BIGMAPS: 'bigmaps'
}

export const METHOD = {
  HEAD: 'SubscribeToHead',
  BLOCKS: 'SubscribeToBlocks',
  OPERATIONS: 'SubscribeToOperations',
  BIGMAPS: 'SubscribeToBigMaps'
}

export function channelToMethod(channel) {
    switch (channel) {
        case CHANNEL.HEAD: {
            return METHOD.HEAD;
        }
        case CHANNEL.BLOCKS: {
            return METHOD.BLOCKS;
        }
        case CHANNEL.OPERATIONS: {
            return METHOD.OPERATIONS;
        }
        case CHANNEL.BIGMAPS: {
            return METHOD.BIGMAPS;
        }
        default: {
            throw new Error('Unknown channel: ' + channel)
        }
    }
}

export const BigMapTag = BIGMAPTAG.METADATA | BIGMAPTAG.TOKEN_METADATA;
//export type OperationKind = 
//    'transaction' | 
//    'origination' | 
//    'delegation' | 
//    'reveal' | 
//    'double_baking' | 
//    'double_endorsing' | 
//    'nonce_revelation' | 
//    'activation' | 
//    'proposal' | 
//    'ballot' | 
//    'endorsement';
//
//export type ResponseTypes = State | Block | OperationTypes | BigMapUpdate;
//export type Params = OperationParameters | BigMapParameters;

//export function paramsMatch(params, item) {
//    const operationsParams = (params as OperationParameters)
//    if (params.address || params.types) {
//        return operationsParams.is(item as OperationTypes);
//    }
//    const bigmapsParams = (params as BigMapParameters)
//    if (bigmapsParams.contract || bigmapsParams.ptr || bigmapsParams.path || bigmapsParams.tags) {
//        return bigmapsParams.is(item as BigMapUpdate);
//    }
//    return true;
//}

