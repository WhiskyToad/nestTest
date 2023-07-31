import { IsNotEmpty, MaxLength } from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;
  description?: string;
}

export class TodoCreateDto {
  @IsNotEmpty()
  name: string;

  @MaxLength(500)
  description?: string;
}
