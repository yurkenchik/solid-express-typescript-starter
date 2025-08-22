import dotenv from "dotenv";

export class ConfigService {
    private static instance: ConfigService;

    private constructor() {
        dotenv.config();
    }

    public static getInstance(): ConfigService {
        if (!this.instance) {
            this.instance = new ConfigService();
        }
        return this.instance;
    }

    getPort(): number {
        return Number(process.env.PORT ?? '5001');
    }
    getMongoUri(): string {
        return process.env.MONGO_URI!;
    }
}