import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PublicationEntity } from '../publication.entity';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {

    constructor(private readonly publicationService: PublicationService) {}

    @Get()
    findAll(): Promise<PublicationEntity[]> {
    return this.publicationService.findAll();
    }

    @Post()
    create(@Body() publication: PublicationEntity): Promise<PublicationEntity> {
    return this.publicationService.save(publication);
    }
    @Get(':id')
    findOne(@Param('id') id: number): Promise<PublicationEntity> {
    return this.publicationService.findById(id);
    }
    @Put(':id')
    async update(@Param('id') id: number, @Body() user: PublicationEntity): Promise<PublicationEntity> {
    await this.publicationService.findById(id);
    return this.publicationService.save(user);
    }
    @Delete(':id')
    remove(@Param('id') id: number): Promise<PublicationEntity> {
    return this.publicationService.delete(id);
    }
}
