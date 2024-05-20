import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { ClientsService } from '../clients.service';
import { validateEmail } from 'src/utils/emailValidate';
import { transformDate } from 'src/utils/dataFormater';


@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientsService: ClientsService) {}

  async execute(data: CreateClientDto) {
    if (!validateEmail(data.email)) { 
      throw new BadRequestException('Invalid email');
    }
    try {
      data.birthDate = transformDate(data.birthDate);
      return await this.clientsService.create(data);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating client: ${error.message}`);
    }
  }
}