import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { NewsModule } from './modules/news/news.module';

@Module({
  imports: [ClientsModule, NewsModule],
})
export class AppModule {}
