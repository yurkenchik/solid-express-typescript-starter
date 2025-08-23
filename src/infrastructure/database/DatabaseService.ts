import { SingletonImplementation } from "@common/SingletonImplementation";
import { ConfigService } from "../config/ConfigService";
import { Logger } from "@infrastructure/logger/Logger";
import * as mongoose from "mongoose";

export class DatabaseService extends SingletonImplementation<DatabaseService> {
    private readonly configService: ConfigService;
    private readonly logger: Logger;

    constructor() {
        super();
        this.configService = ConfigService.getInstance();
        this.logger = Logger.getInstance();
    }

    async connect(): Promise<void> {
        const mongoDatabaseUrl = this.configService.getMongoUri();
        await mongoose.connect(mongoDatabaseUrl);
        this.logger.info('Mongo database successfully connected');
    }
}