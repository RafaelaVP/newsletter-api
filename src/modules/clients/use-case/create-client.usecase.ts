import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { ClientsService } from '../clients.service';

@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientsService: ClientsService) {}

  async execute(data: CreateClientDto) {
    try {
      return await this.clientsService.create(data);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating client: ${error.message}`);
    }
  }
}