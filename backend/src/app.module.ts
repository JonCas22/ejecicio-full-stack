import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PublicationModule} from './publication/publication.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MenusModule } from './menus/menus.module';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
  imports: [UserModule, 
    TypeOrmModule.forRoot(), PublicationModule, AuthModule, UsersModule, MenusModule, MenuItemModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
