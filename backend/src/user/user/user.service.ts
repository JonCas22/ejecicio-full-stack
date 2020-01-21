import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>)
    {}

    findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
        }

    save(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
        }

    findById(id: number): Promise<UserEntity> {
        return this.userRepository.findOne(id);
        }

    async delete(id: number): Promise<UserEntity> {
        const promesaObjeto = await this.userRepository.findOne(id);
        return this.userRepository.remove(promesaObjeto);
        }
}
