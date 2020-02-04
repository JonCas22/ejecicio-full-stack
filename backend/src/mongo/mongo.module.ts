import { Module } from '@nestjs/common';
import { MongoController } from './mongo/mongo.controller';
import { MongoService } from './mongo/mongo.service';
import { MongooseModule } from '@nestjs/mongoose'
import { Schema } from './schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pokemon', schema: Schema }])],
  controllers: [MongoController],
  providers: [MongoService]
})
export class MongoModule {}
