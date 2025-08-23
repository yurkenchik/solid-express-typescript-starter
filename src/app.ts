import express, { Express } from "express";
import { requestLoggerMiddleware } from "@common/middlewares/requestLoggerMiddleware";
import userRouter from "@domains/user/routers/UserRouter";

export function createExpressApplication(): Express {
    const app: Express = express();

    app.use(requestLoggerMiddleware);
    app.use(express.json({ limit: '1mb' }));

    app.use('/api/users', userRouter);

    return app;
}