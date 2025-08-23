import { Request, Response, NextFunction } from "express";
import { Logger } from "@infrastructure/logger/Logger";

export function requestLoggerMiddleware(request: Request, response: Response, next: NextFunction) {
    const logger: Logger = Logger.getInstance();

    logger.request(`Incoming request: ${request.method} ${request.originalUrl}`);

    response.on('finish', () => {
        logger.response(`Response status: ${response.statusCode} for ${request.method} ${request.originalUrl}`);
    });

    next();
}