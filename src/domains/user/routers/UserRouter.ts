import express, { Request, Response } from 'express';
import { UserController } from "./UserController";

const userRouter = express.Router();
const userController = UserController.getInstance();

userRouter.post('', async (request: Request, response: Response): Promise<Response> => {
    return userController.createUser(request, response);
});

userRouter.get('/:id', async (request: Request, response: Response): Promise<Response> => {
    return userController.getUserById(request, response);
});

export default userRouter;