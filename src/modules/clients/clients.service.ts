import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from '../clients/repository/client.respository';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientsRepository) {}

  async create(data: CreateClientDto) {
    return this.clientsRepository.create(data);
  }

  async findAll() {
    return this.clientsRepository.findAll();
  }

  async findOne(id: string) {
    const client = await this.clientsRepository.findOne(id);
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

  async update(id: string, data: UpdateClientDto) {
    return this.clientsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.clientsRepository.delete(id);
  }
}