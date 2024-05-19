import { PrismaService } from '../../../services/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';

import { Client } from '@prisma/client';
import { UpdateClientDto } from '../dto/update-client.dto';

@Injectable()
export class ClientsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClientDto): Promise<Client> {
    return this.prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        birthDate: data.birthDate,
      },
    });
  }

  async findAll(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  async findOne(id: string): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, data: UpdateClientDto): Promise<Client> {
    return this.prisma.client.update({
      where: { id: id },
      data: {
        name: data.name,
        email: data.email,
        birthDate: data.birthDate,
      },
    });
  }

  async delete(id: string): Promise<Client> {
    return this.prisma.client.delete({
      where: { id: id },
    });
  }
}

