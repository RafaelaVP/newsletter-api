import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';
import { NewsService } from '../news.service';

@Injectable()
export class CreateNewsUseCase {
  constructor(private readonly newsService: NewsService) {}

  async execute(data: CreateNewsDto) {
    try {
      return await this.newsService.create(data);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating news: ${error.message}`);
    }
  }
}