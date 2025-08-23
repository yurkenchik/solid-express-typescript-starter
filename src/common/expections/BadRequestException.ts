import { HttpException } from "./HttpException";

export class BadRequestException extends HttpException {
    constructor(message: string = 'Bad request') {
        super(message, 400, 'BadRequestException');
    }
}
