import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { NewsService } from '../news.service';
import { News } from '@prisma/client';

@Injectable()
export class FindNewsUseCase {
  constructor(private readonly newsService: NewsService) {}

  async findAll(): Promise<News[]> {
    try {
      return await this.newsService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(`Error fetching all news: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<News> {
    try {
      const news = await this.newsService.findOne(id);
      if (!news) {
        throw new NotFoundException(`News with ID ${id} not found`);
      }
      return news;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Error fetching news with ID ${id}: ${error.message}`);
    }
  }

  async findUnprocessed(): Promise<News[]> {
    try {
      return await this.newsService.findUnprocessed();
    } catch (error) {
      throw new InternalServerErrorException(`Error fetching unprocessed news: ${error.message}`);
    }
  }
}