import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderBulkDto {
  @IsNumber()
  length: number;

  @IsNumber()
  width: number;

  @IsNumber()
  depth: number;

  @IsNumber()
  weight: number;

  @IsString({ message: 'Content should be a string' })
  @IsNotEmpty({ message: 'Content is required' })
  content: string;
}
