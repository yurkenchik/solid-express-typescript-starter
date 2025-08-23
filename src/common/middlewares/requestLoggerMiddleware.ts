import { Request, Response, NextFunction } from "express";
import { Logger } from "../infrastructure/logger/Logger";
import { NextFunction } from "express";

export function requestLoggerMiddleware(request: Request, response: Response, next: NextFunction) {
    const logger: Logger = Logger.getInstance();

    logger.info(`Incoming request: ${request.method} ${request.originalUrl}`);

    response.on('finish', () => {
        logger.info(`Response status: ${response.statusCode} for ${request.method} ${request.originalUrl}`);
    });

    next();
}