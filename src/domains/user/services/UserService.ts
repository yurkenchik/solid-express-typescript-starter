import { SingletonImplementation } from "@common/SingletonImplementation";
import { User, UserDocument } from "../entites/User";
import { CreateUserDto } from "../dto/request/CreateUserDto";
import { NotFoundException } from "@common/expections/NotFoundException";

export class UserService extends SingletonImplementation<UserDocument> {
    constructor() {
        super();
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
        const user = await User.create(createUserDto);
        return this.getUserById(user.id);
    }

    async getUserById(id: string): Promise<UserDocument> {
        const user = await User.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}