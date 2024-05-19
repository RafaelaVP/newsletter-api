import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './repository/client.respository';
import { PrismaService } from 'src/services/prisma.service';
import { CreateClientUseCase } from './use-case/create-client.usecase';
import { FindClientsUseCase } from './use-case/find-client.usecase';
import { DeleteClientUseCase } from './use-case/delete-client.usecase';
import { UpdateClientUseCase } from './use-case/update-client.usecase';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository, PrismaService, CreateClientUseCase, FindClientsUseCase, DeleteClientUseCase, UpdateClientUseCase],
  exports: [ClientsService],
})
export class ClientsModule {}
