import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
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

  
  async findOne(username: string): Promise<any> {
    // console.log(username);
    let options= { where: { 'nombre_usuario': username }, take: 1 }
    // console.log(options);
    let usuario = this.userRepository.find(options);
    return usuario;
    //return this.users.find(u => u.username===username);
  }
  
}