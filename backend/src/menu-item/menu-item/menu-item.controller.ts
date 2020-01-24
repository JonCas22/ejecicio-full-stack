import { Controller, Put, Delete, Param, Body, Get, Post } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuItemEntity } from '../menu-item.entity';

@Controller('menu-item')
export class MenuItemController {

    constructor(private readonly menuItemService: MenuItemService) {}

    @Get()
    findAll(): Promise<MenuItemEntity[]> {
    return this.menuItemService.findAll();
    }

    @Post()
    create(@Body() menuItem: MenuItemEntity): Promise<MenuItemEntity> {
    return this.menuItemService.save(menuItem);
    }
    @Get(':id')
    findOne(@Param('id') id: number): Promise<MenuItemEntity> {
    return this.menuItemService.findById(id);
    }

    /*@Put(':id')
    async update(@Param('id') id: number, @Body() publication: PublicationEntity): Promise<PublicationEntity> {
    let dato = await this.publicationService.findById(id);
    publication.id = id;
    return this.publicationService.save(publication);
    }*/

    @Put(':id')
    async update(@Param('id') id: number, @Body() menuItem: MenuItemEntity): Promise<MenuItemEntity> {
    let dato = await this.menuItemService.findById(id);
    dato.titulo = menuItem.titulo;
    dato.nombre = menuItem.nombre;
    dato.icono = menuItem.icono;
    dato.posicion_icono = menuItem.posicion_icono;
    dato.autor = menuItem.autor;
    dato.ultimo_editor = menuItem.ultimo_editor;
    dato.ultima_fecha_modificacion = menuItem.ultima_fecha_modificacion;
    return this.menuItemService.save(dato);
    }
    @Delete(':id')
    remove(@Param('id') id: number): Promise<MenuItemEntity> {
    return this.menuItemService.delete(id);
    }
}
