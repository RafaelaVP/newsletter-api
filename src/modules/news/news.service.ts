import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateNewsDto,
} from './dto/create-news.dto';

import { NewsRepository } from './repository/news.repository';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: NewsRepository) {}

  async create(data: CreateNewsDto) {
    return this.newsRepository.create(data);
  }

  async findAll() {
    return this.newsRepository.findAll();
  }

  async findOne(id: string) {
    const news = await this.newsRepository.findOne(id);
    if (!news) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return news;
  }

  async update(id: string, data: UpdateNewsDto) {
    return this.newsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.newsRepository.delete(id);
  }

  async findUnprocessed() {
    return this.newsRepository.findUnprocessed();
  }

  async markAsProcessed(id: string) {
    return this.newsRepository.markAsProcessed(id);
  }

}
