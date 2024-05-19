import { IsNotEmpty, IsOptional, IsEmail, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty({ required: false })
  email: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  birthDate: Date;
}