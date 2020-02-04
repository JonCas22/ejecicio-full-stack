import { IsInt, IsString } from 'class-validator';

export class Pokemon {
  @IsString()
  name: string;
  @IsString()
  type: string;
}