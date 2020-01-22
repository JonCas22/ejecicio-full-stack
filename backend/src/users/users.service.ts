import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
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

  async findOne(username: string): Promise<User> {
    return this.users.find(user => user.username === username);
  }
}