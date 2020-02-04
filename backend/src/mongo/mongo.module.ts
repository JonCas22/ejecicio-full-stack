import { Module } from '@nestjs/common';
import { MongoService } from './mongo/mongo.service';
import { MongoController } from './mongo/mongo.controller';

@Module({
  providers: [MongoService],
  controllers: [MongoController]
})
export class MongoModule {}
