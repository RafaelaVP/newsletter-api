import { PartialType } from '@nestjs/swagger';
import { CreateNewsDto } from '../dto/create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {}