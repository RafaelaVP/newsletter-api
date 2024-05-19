import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ClientsService } from '../clients.service';
import { Client } from '@prisma/client';

@Injectable()
export class FindClientsUseCase {
  constructor(private readonly clientsService: ClientsService) {}

  async findAll(): Promise<Client[]> {
    try {
      return this.clientsService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(`Error finding all clients: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<Client> {
    try {
      const client = await this.clientsService.findOne(id);
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Error finding client with ID ${id}: ${error.message}`);
    }
  }
}