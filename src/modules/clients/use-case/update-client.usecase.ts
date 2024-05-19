import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientsService } from '../clients.service';
import { Client } from '@prisma/client';
import { UpdateClientDto } from '../dto/update-client.dto';

@Injectable()
export class UpdateClientUseCase {
  constructor(private readonly clientsService: ClientsService) {}

  async update(id: string, data: UpdateClientDto): Promise<Client> {
    try {
      const client = await this.clientsService.update(id, data);
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      throw new Error(`Error updating client with ID ${id}: ${error.message}`);
    }
  }
}