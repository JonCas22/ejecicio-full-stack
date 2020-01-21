import { UserService } from './user.service';
import { UserEntity } from '../user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<UserEntity[]>;
    create(user: UserEntity): Promise<UserEntity>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, user: UserEntity): Promise<UserEntity>;
    remove(id: number): Promise<UserEntity>;
}
