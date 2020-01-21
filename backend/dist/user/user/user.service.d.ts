import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    save(user: UserEntity): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    delete(id: number): Promise<UserEntity>;
}
