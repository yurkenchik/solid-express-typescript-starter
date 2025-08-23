import { HttpException } from "./HttpException";

export class NotFoundException extends HttpException {
    constructor(message: string = 'Resource not found') {
        super(message, 404, 'NotFoundException');
    }
}