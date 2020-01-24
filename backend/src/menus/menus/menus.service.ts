import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenusEntity } from '../menus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenusService {

    constructor(
        @InjectRepository(MenusEntity)
        private readonly menusRepository: Repository<MenusEntity>)
        {}
    
        findAll(): Promise<MenusEntity[]> {
            return this.menusRepository.find();
            }
    
        save(menus: MenusEntity): Promise<MenusEntity> {
            return this.menusRepository.save(menus);
            }
    
        findById(id: number): Promise<MenusEntity> {
            return this.menusRepository.findOne(id);
            }
    
        async delete(id: number): Promise<MenusEntity> {
            const objeto = await this.menusRepository.findOne(id);
            return this.menusRepository.remove(objeto);
            }
}
