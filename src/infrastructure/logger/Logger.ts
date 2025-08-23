import { SingletonImplementation } from "@common/SingletonImplementation";

export class Logger extends SingletonImplementation<Logger> {
    constructor() {
        super();
    }

    private colorize(colorCode: string, message: string): string {
        return `\x1b[${colorCode}m${message}\x1b[0m`;
    }

    info(message: string, extra?: unknown): void {
        console.log(this.colorize('32', `[INFO] ${message}`), extra ?? '');
    }

    warn(message: string, extra?: unknown): void {
        console.warn(this.colorize('33', `[WARN] ${message}`), extra ?? '');
    }

    error(message: string, extra?: unknown): void {
        console.error(this.colorize('31', `[ERROR] ${message}`), extra ?? '');
    }

    request(message: string, extra?: unknown): void {
        console.log(this.colorize('34', `[REQUEST] ${message}`), extra ?? '');
    }

    response(message: string, extra?: unknown): void {
        console.log(this.colorize('35', `[RESPONSE] ${message}`), extra ?? '');
    }

    serverStart(message: string, extra?: unknown): void {
        console.log(this.colorize('1;39;41', `[SERVER] ${message}`), extra ?? '');
    }
}