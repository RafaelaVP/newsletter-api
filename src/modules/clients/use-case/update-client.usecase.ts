import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ClientsService } from '../clients.service';
import { Client } from '@prisma/client';
import { UpdateClientDto } from '../dto/update-client.dto';
import { validateEmail } from 'src/utils/emailValidate';
import { transformDate } from 'src/utils/dataFormater';

@Injectable()
export class UpdateClientUseCase {
  constructor(private readonly clientsService: ClientsService) {}

  async update(id: string, data: UpdateClientDto): Promise<Client> {
    try {
      if (!validateEmail(data.email)) { 
        throw new BadRequestException('Invalid email');
      }
      
      data.birthDate = transformDate(data.birthDate);

      const client = await this.clientsService.update(id, data);
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      throw new InternalServerErrorException(`Error updating client with ID ${id}: ${error.message}`);
    }
  }
}