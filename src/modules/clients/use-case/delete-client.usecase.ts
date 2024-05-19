import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ClientsService } from '../clients.service';
import { Client } from '@prisma/client';

@Injectable()
export class DeleteClientUseCase {
  constructor(private readonly clientsService: ClientsService) {}

  async delete(id: string): Promise<Client> {
    try {
      const client = await this.clientsService.delete(id);
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Error deleting client with ID ${id}: ${error.message}`);
    }
  }
}