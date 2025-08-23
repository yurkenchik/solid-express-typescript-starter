import { HttpException } from "./HttpException";

export class UnauthorizedException extends HttpException {
    constructor(message: string = 'Unauthorized') {
        super(message, 401, 'UnauthorizedException');
    }
}