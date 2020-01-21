import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication/publication.service';
import { PublicationController } from './publication/publication.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PublicationEntity])],
    providers: [PublicationService],
    controllers: [PublicationController],
})
export class PublicationModule {}
