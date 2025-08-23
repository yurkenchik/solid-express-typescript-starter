import dotenv from "dotenv";
import { SingletonImplementation } from "@common/SingletonImplementation";

export class ConfigService extends SingletonImplementation<ConfigService> {
     constructor() {
        super();
        dotenv.config();
    }

    getPort(): number {
        return Number(process.env.PORT ?? '5001');
    }
    getMongoUri(): string {
        return process.env.MONGO_URI!;
    }
}