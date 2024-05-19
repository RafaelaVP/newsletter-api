import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as nodemailer from 'nodemailer';
import { NewsService } from '../news.service';
import { ClientsService } from '../../clients/clients.service';

@Injectable()
export class SendNewslettersUseCase {
  constructor(
    private newsService: NewsService,
    private clientsService: ClientsService,
  ) {}

  @Cron('0 8 * * *')
  async handleCron() {
    this.execute();
  }

  async execute() {
    // Buscar notícias não processadas
    const news = await this.newsService.findUnprocessed();

    // Buscar todos os clientes
    const clients = await this.clientsService.findAll();

    // Configurar transporte de e-mail
    const transporter = nodemailer.createTransport({
      // Configurações do transporte de e-mail
    });

    for (const client of clients) {
      let message = `Bom dia ${client.name},\n\nSegue as notícias de hoje.\n\n`;

      // Adicionar mensagem de aniversário, se aplicável
      if (client.birthDate && client.birthDate.getDate() === new Date().getDate() &&
          client.birthDate.getMonth() === new Date().getMonth()) {
        message += 'Feliz aniversário!\n\n';
      }

      // Adicionar notícias ao e-mail
      for (const item of news) {
        message += `${item.title}\n${item.description}\nLeia mais em: ${item.link}\n\n`;
      }

      message += 'Até a próxima.';

      // Enviar e-mail
      await transporter.sendMail({
        from: 'seu-email@example.com',
        to: client.email,
        subject: 'Notícias do dia!',
        text: message,
      });

      // Marcar notícias como processadas
      for (const item of news) {
        await this.newsService.markAsProcessed(item.id);
      }
    }
  }
}