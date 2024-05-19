import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsService } from '../news.service';
import { News } from '@prisma/client';

@Injectable()
export class DeleteNewsUseCase {
  constructor(private readonly newsService: NewsService) {}

  async delete(id: string): Promise<News> {
    try {
      const news = await this.newsService.delete(id);
      if (!news) {
        throw new NotFoundException(`News with ID ${id} not found`);
      }
      return news;
    } catch (error) {
      throw new Error(`Error deleting news with ID ${id}: ${error.message}`);
    }
  }
}