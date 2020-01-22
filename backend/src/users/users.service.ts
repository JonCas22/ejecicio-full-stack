import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>
  ) {
    this.users = [
      {
        userId: 1,
        username: 'jon',
        password: '1234',
      },
      {
        userId: 2,
        username: 'cris',
        password: '1234',
      },
      {
        userId: 3,
        username: 'olek',
        password: '1234',
      },
    ];
  }

  
  async findOne(username: string): Promise<UserEntity> {
    return this.users.find(user => user.username === username);
  }
  
}