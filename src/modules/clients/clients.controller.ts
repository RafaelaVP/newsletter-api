import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateClientUseCase } from './use-case/create-client.usecase';
import { UpdateClientUseCase } from './use-case/update-client.usecase';
import { DeleteClientUseCase } from './use-case/delete-client.usecase';
import { FindClientsUseCase } from './use-case/find-client.usecase';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly updateClientUseCase: UpdateClientUseCase,
    private readonly deleteClientUseCase: DeleteClientUseCase,
    private readonly findClientsUseCase: FindClientsUseCase,
  ) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.createClientUseCase.execute(createClientDto);
  }

  @Get()
  findAll() {
    return this.findClientsUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findClientsUseCase.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.updateClientUseCase.update(id, updateClientDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteClientUseCase.delete(id);
  }
}