import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PublicationModule} from './publication/publication.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongoModule } from './mongo/mongo.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UserModule, 
    TypeOrmModule.forRoot(), PublicationModule, AuthModule, UsersModule, MongoModule,
    MongooseModule.forRoot('mongodb://localhost/test',
    { useNewUrlParser: true, useUnifiedTopology: true }),],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
