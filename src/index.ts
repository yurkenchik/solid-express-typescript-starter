import { Logger } from "@infrastructure/logger/Logger";
import { ConfigService } from "@infrastructure/config/ConfigService";
import { DatabaseService } from "@infrastructure/database/DatabaseService";
import { createExpressApplication } from "./app";

async function launchExpressApplication(): Promise<void> {
    const logger: Logger = Logger.getInstance();
    const configService: ConfigService = ConfigService.getInstance();
    const databaseService: DatabaseService = DatabaseService.getInstance();

    const expressApplication = createExpressApplication();
    await databaseService.connect();

    expressApplication.listen(configService.getPort(), (): void => {
        logger.serverStart(`🚀  Server is currently running on port: ${configService.getPort()} 😻 🚀 `);
    });
}

launchExpressApplication()
    .then((): void => {
        const logger: Logger = Logger.getInstance();
        logger.info('Express application launched');
    })
    .catch((error: Error) => {
        const logger: Logger = Logger.getInstance();
        logger.error(`Error launching express application: `, error);
    })