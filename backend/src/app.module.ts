import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), PublicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
