import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item/menu-item.service';
import { MenuItemController } from './menu-item/menu-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemEntity } from './menu-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemEntity])],
  providers: [MenuItemService],
  controllers: [MenuItemController]
})
export class MenuItemModule {}
