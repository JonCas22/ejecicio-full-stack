import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {  
      
        this.authService.validateUser(req.nombre_usuario, req.contrasena).then((datos)=>{
          return this.authService.login(req.user);
        });

      
    }

    @UseGuards(AuthGuard())
    @Get('user')
    getUser(@Request() req){
      return "HOLA PACO";
    }
    

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
  }
}