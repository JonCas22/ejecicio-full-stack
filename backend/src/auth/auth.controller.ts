import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}
    // @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Body() req) : Promise<any>{        
      return this.authService.login(req);
    }

    @UseGuards(AuthGuard())
    @Get('user')
    getUser(@Body() req){
      return "HOLA PACO";
    }
    

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
  }
}