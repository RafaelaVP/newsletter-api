import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  link: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ default: false })
  processed: boolean = false;

  @IsNotEmpty()
  @ApiProperty()
  createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  updatedAt: Date;
}