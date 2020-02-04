import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pokemon } from '../pokemon';
import { MongoService } from './mongo.service';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}
  @Post()
  async create(@Body() pokemon: Pokemon): Promise<Pokemon> {
    const pokemonD = await this.mongoService.create(pokemon);
    return pokemonD;
  }

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.mongoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.mongoService.findById(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() pokemon: Pokemon): Promise<Pokemon> {
    return this.mongoService.updateById(id, pokemon);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Pokemon> {
    return this.mongoService.delete(id);
  }
}