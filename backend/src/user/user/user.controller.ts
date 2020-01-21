import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from '../user.entity';

@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
    }

    @Post()
    create(@Body() user: UserEntity): Promise<UserEntity> {
    return this.userService.save(user);
    }
    @Get(':id')
    findOne(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
    }
    @Put(':id')
    async update(@Param('id') id: number, @Body() user: UserEntity): Promise<UserEntity> {
    await this.userService.findById(id);
    user.id = id;
    return this.userService.save(user);
    }
    @Delete(':id')
    remove(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.delete(id);
    }
}
