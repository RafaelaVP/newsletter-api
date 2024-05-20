import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsRepository } from './repository/news.repository';
import { PrismaService } from 'src/services/prisma.service';
import { CreateNewsUseCase } from './usecase/create-news.usecase';
import { FindNewsUseCase } from './usecase/find-news.usecase';
import { DeleteNewsUseCase } from './usecase/delete-news.usecase';
import { UpdateNewsUseCase } from './usecase/update-news.usecase';
import { SendNewslettersUseCase } from './usecase/send-newsletters.usecase';
import { ClientsModule } from '../clients/clients.module';
import { ClientsService } from '../clients/clients.service';
import { ClientsRepository } from '../clients/repository/client.respository';

@Module({
  imports: [ScheduleModule.forRoot(), ClientsModule],
  controllers: [NewsController],
  providers: [
    NewsService,
    NewsRepository,
    PrismaService,
    CreateNewsUseCase,
    FindNewsUseCase,
    DeleteNewsUseCase,
    UpdateNewsUseCase,
    SendNewslettersUseCase,
    ClientsService,
    ClientsRepository
  ],
})
export class NewsModule {}