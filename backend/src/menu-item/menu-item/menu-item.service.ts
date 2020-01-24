import { Injectable } from '@nestjs/common';
import { MenuItemEntity } from '../menu-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MenuItemService {

    constructor(
        @InjectRepository(MenuItemEntity)
        private readonly menuItemRepository: Repository<MenuItemEntity>)
        {}
    
        findAll(): Promise<MenuItemEntity[]> {
            return this.menuItemRepository.find();
            }
    
        save(menuItem: MenuItemEntity): Promise<MenuItemEntity> {
            return this.menuItemRepository.save(menuItem);
            }
    
        findById(id: number): Promise<MenuItemEntity> {
            return this.menuItemRepository.findOne(id);
            }
    
        async delete(id: number): Promise<MenuItemEntity> {
            const objeto = await this.menuItemRepository.findOne(id);
            return this.menuItemRepository.remove(objeto);
            }
}
