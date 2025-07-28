import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { Cocktail } from './entities/cocktail.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CocktailsService {
  constructor(
    @InjectModel(Cocktail.name)
    private readonly cocktailModel:Model<Cocktail>
  ){}
  async create(createCocktailDto: CreateCocktailDto) {
    const cocktail=this.cocktailModel.
    create(createCocktailDto);
    return cocktail;
  }

  async findAll() {
    return this.cocktailModel.find({});
  }

  async findOne(id: string) {
    const cocktail=await this.cocktailModel.findOne({_id:id})
    console.log(cocktail);
    if(!cocktail){
      throw new 
      NotFoundException("No existe el elemento buscado");
    }
    return cocktail;
  }

  update(id: string, updateCocktailDto: UpdateCocktailDto) {
    const cocktail=this.findOne(id);
    this.cocktailModel.updateOne({_id:id},updateCocktailDto)
  }

  remove(id: string) {
    return this.cocktailModel.deleteOne({_id:id});
  }
}
