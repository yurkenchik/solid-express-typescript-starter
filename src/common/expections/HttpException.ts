export class HttpException extends Error {
    public readonly statusCode: number;

    constructor(
        message: string = 'Unexpected error occurred.',
        statusCode: number = 500,
        name: string = 'HttpException',
    ) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpException);
        }
    }
}