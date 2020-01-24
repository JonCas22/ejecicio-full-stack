import { Controller, Put, Param, Body, Delete, Get, Post } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusEntity } from '../menus.entity';

@Controller('menus')
export class MenusController {

    constructor(private readonly menusService: MenusService) {}

    @Get()
    findAll(): Promise<MenusEntity[]> {
    return this.menusService.findAll();
    }

    @Post()
    create(@Body() menus: MenusEntity): Promise<MenusEntity> {
    return this.menusService.save(menus);
    }
    @Get(':id')
    findOne(@Param('id') id: number): Promise<MenusEntity> {
    return this.menusService.findById(id);
    }

    /*@Put(':id')
    async update(@Param('id') id: number, @Body() publication: PublicationEntity): Promise<PublicationEntity> {
    let dato = await this.publicationService.findById(id);
    publication.id = id;
    return this.publicationService.save(publication);
    }*/

    @Put(':id')
    async update(@Param('id') id: number, @Body() menus: MenusEntity): Promise<MenusEntity> {
    let dato = await this.menusService.findById(id);
    dato.titulo = menus.titulo;
    dato.main = menus.main;
    dato.icono = menus.icono;
    dato.publicado = menus.publicado;
    dato.publico = menus.publico;
    dato.autor = menus.autor;
    dato.ultimo_editor = menus.ultimo_editor;
    dato.ultima_fecha_modificacion = menus.ultima_fecha_modificacion;
    return this.menusService.save(dato);
    }
    @Delete(':id')
    remove(@Param('id') id: number): Promise<MenusEntity> {
    return this.menusService.delete(id);
    }
}
