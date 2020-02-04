import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon';

@Injectable()
export class MongoService {
  constructor(@InjectModel('Pokemon') private readonly modelo: Model<Pokemon>) {}

  async create(pokemon: Pokemon): Promise<Pokemon> {
    const createdPokemon = new this.modelo(pokemon);
    return await createdPokemon.save();
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.modelo.find().exec();
  }

  async findById(id: string): Promise<Pokemon> {
    return await this.modelo.findById(id);
  }

  async updateById(id: string, pokemon: Pokemon): Promise<Pokemon> {
    const cambios = { name: pokemon.name, type: pokemon.type};
    await this.modelo.updateOne({ _id : id }, cambios);
    return await this.modelo.findById(id);
  }

  async delete(id: string): Promise<Pokemon> {
    const pokemonN = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({ _id : id });
    return pokemonN;
  }
}