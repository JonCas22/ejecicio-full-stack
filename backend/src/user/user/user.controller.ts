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
    create(@Body() photo: UserEntity): Promise<UserEntity> {
    return this.userService.save(photo);
    }
    @Get(':id')
    findOne(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
    }
    @Put(':id')
    async update(@Param('id') id: number, @Body() photo: UserEntity): Promise<UserEntity> {
    await this.userService.findById(id);
    photo.id = id;
    return this.userService.save(photo);
    }
    @Delete(':id')
    remove(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.delete(id);
    }
}
