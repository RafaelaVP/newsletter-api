import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsService } from '../news.service';
import { News } from '@prisma/client';
import { UpdateNewsDto } from '../dto/update-news.dto';

@Injectable()
export class UpdateNewsUseCase {
  constructor(private readonly newsService: NewsService) {}

  async update(id: string, data: UpdateNewsDto): Promise<News> {
    try {
      const news = await this.newsService.update(id, data);
      if (!news) {
        throw new NotFoundException(`News with ID ${id} not found`);
      }
      return news;
    } catch (error) {
      throw new Error(`Error updating news with ID ${id}: ${error.message}`);
    }
  }

  async markAsProcessed(id: string): Promise<News> {
    try {
      const news = await this.newsService.markAsProcessed(id);
      if (!news) {
        throw new NotFoundException(`News with ID ${id} not found`);
      }
      return news;
    } catch (error) {
      throw new Error(`Error marking news with ID ${id} as processed: ${error.message}`);
    }
  }
}