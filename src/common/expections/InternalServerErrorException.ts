import { HttpException } from "./HttpException";

export class InternalServerErrorException extends HttpException {
    constructor(message: string = 'Internal server error') {
        super(message, 500, 'InternalServerErrorException');
    }
}