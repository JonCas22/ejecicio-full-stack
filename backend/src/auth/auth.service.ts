import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    // console.log(user[0]);
    let user2= user[0]
    console.log(user2);
    if (user2 && user2.contrasena === pass) {
      const { password, ...result } = user2;
      console.log(result);
      return result; 
    }
    return null;
  }

  async login(user: any) {
    // console.log(user);
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  }