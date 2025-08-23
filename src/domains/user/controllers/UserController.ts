import { Request, Response } from "express";
import { UserService } from "./UserService";
import { CreateUserDto } from "./dto/request/CreateUserDto";
import { normalizeToHttpException } from "../../utils/errorNormalizer";
import { SingletonImplementation } from "../../common/SingletonImplementation";

export class UserController extends SingletonImplementation<UserController> {
    private readonly userService: UserService = UserService.getInstance();

    constructor() {
        super();
    }

    async createUser(request: Request, response: Response): Promise<Response> {
        try {
            const createUserDto: CreateUserDto = request.body;
            const user = await this.userService.createUser(createUserDto);
            return response.status(201).json(user);
        } catch (error) {
            throw normalizeToHttpException(error);
        }
    }

    async getUserById(request: Request, response: Response): Promise<Response> {
        try {
            const userId: string = request.params.id;
            const user = await this.userService.getUserById(userId);
            return response.status(200).json(user);
        } catch (error) {
            throw normalizeToHttpException(error);
        }
    }
}