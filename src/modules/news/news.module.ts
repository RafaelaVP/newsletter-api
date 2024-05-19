import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsRepository } from './repository/news.repository';
import { PrismaService } from 'src/services/prisma.service';
import { CreateNewsUseCase } from './usecase/create-news.usecase';
import { FindNewsUseCase } from './usecase/find-news.usecase';
import { DeleteNewsUseCase } from './usecase/delete-news.usecase';
import { UpdateNewsUseCase } from './usecase/update-news.usecase';

@Module({
  controllers: [NewsController],
  providers: [NewsService, NewsRepository, PrismaService, CreateNewsUseCase, FindNewsUseCase, DeleteNewsUseCase, UpdateNewsUseCase],
})
export class NewsModule {}
