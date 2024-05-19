import { PrismaService } from '../../../services/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';

import { News } from '@prisma/client';
import { UpdateNewsDto } from '../dto/update-news.dto';

@Injectable()
export class NewsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNewsDto): Promise<News> {
    return this.prisma.news.create({
      data: {
        title: data.title,
        description: data.description,
        link: data.link,
        processed: false,
      },
    });
  }

  async findAll(): Promise<News[]> {
    return this.prisma.news.findMany();
  }

  async findOne(id: string): Promise<News | null> {
    return this.prisma.news.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, data: UpdateNewsDto): Promise<News> {
    return this.prisma.news.update({
      where: { id: id },
      data: {
        title: data.title,
        description: data.description,
      },
    });
  }

  async delete(id: string): Promise<News> {
    return this.prisma.news.delete({
      where: { id: id },
    });
  }

  async findUnprocessed(): Promise<News[]> {
    return this.prisma.news.findMany({
      where: { processed: false },
    });
  }

  async markAsProcessed(id: string): Promise<News> {
    return this.prisma.news.update({
      where: { id: id },
      data: { processed: true },
    });
  }
}
