import { NodeHttpRequest } from './core/NodeHttpRequest.js';
import { AccountsService } from './services/AccountsService.js';
import { BigMapsService } from './services/BigMapsService.js';
import { BlocksService } from './services/BlocksService.js';
import { CommitmentsService } from './services/CommitmentsService.js';
import { ConstantsService } from './services/ConstantsService.js';
import { ContractsService } from './services/ContractsService.js';
import { CyclesService } from './services/CyclesService.js';
import { DelegatesService } from './services/DelegatesService.js';
import { HeadService } from './services/HeadService.js';
import { OperationsService } from './services/OperationsService.js';
import { ProtocolsService } from './services/ProtocolsService.js';
import { QuotesService } from './services/QuotesService.js';
import { RewardsService } from './services/RewardsService.js';
import { RightsService } from './services/RightsService.js';
import { SoftwareService } from './services/SoftwareService.js';
import { StatisticsService } from './services/StatisticsService.js';
import { VotingService } from './services/VotingService.js';
export class TzKTAPI {
    accounts;
    bigMaps;
    blocks;
    commitments;
    constants;
    contracts;
    cycles;
    delegates;
    head;
    operations;
    protocols;
    quotes;
    rewards;
    rights;
    software;
    statistics;
    voting;
    request;
    constructor(config, HttpRequest = NodeHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.tzkt.io',
            VERSION: config?.VERSION ?? '1.6.3',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.accounts = new AccountsService(this.request);
        this.bigMaps = new BigMapsService(this.request);
        this.blocks = new BlocksService(this.request);
        this.commitments = new CommitmentsService(this.request);
        this.constants = new ConstantsService(this.request);
        this.contracts = new ContractsService(this.request);
        this.cycles = new CyclesService(this.request);
        this.delegates = new DelegatesService(this.request);
        this.head = new HeadService(this.request);
        this.operations = new OperationsService(this.request);
        this.protocols = new ProtocolsService(this.request);
        this.quotes = new QuotesService(this.request);
        this.rewards = new RewardsService(this.request);
        this.rights = new RightsService(this.request);
        this.software = new SoftwareService(this.request);
        this.statistics = new StatisticsService(this.request);
        this.voting = new VotingService(this.request);
    }
}
//# sourceMappingURL=client.js.map