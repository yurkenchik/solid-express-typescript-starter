import { HttpException } from '../expections/HttpException';

export function normalizeToHttpException(error: unknown): HttpException {
    if (error instanceof HttpException) {
        return error;
    }

    if (error instanceof Error) {
        return new HttpException(error.message);
    }

    return new HttpException('Unknown error');
}