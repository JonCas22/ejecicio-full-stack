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

    /*@Put(':id')
    async update(@Param('id') id: number, @Body() publication: PublicationEntity): Promise<PublicationEntity> {
    let dato = await this.publicationService.findById(id);
    publication.id = id;
    return this.publicationService.save(publication);
    }*/

    @Put(':id')
    async update(@Param('id') id: number, @Body() publication: PublicationEntity): Promise<PublicationEntity> {
    let dato = await this.publicationService.findById(id);
    dato.autor = publication.autor;
    dato.entradilla = publication.entradilla;
    dato.imagen_portada = publication.imagen_portada;
    dato.main = publication.main;
    dato.publicado = publication.publicado;
    dato.publico = publication.publico;
    dato.titulo = publication.titulo;
    return this.publicationService.save(dato);
    }
    @Delete(':id')
    remove(@Param('id') id: number): Promise<PublicationEntity> {
    return this.publicationService.delete(id);
    }
}
