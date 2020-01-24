import { Module } from '@nestjs/common';
import { MenusService } from './menus/menus.service';
import { MenusController } from './menus/menus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenusEntity } from './menus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenusEntity])],
  providers: [MenusService],
  controllers: [MenusController]
})
export class MenusModule {}
