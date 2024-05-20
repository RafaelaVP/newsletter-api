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
    const news = await this.newsService.findUnprocessed();

    const clients = await this.clientsService.findAll();

   const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false, 
    auth: null
} as nodemailer.TransportOptions);

    for (const client of clients) {
      let message = `Bom dia, ${client.name},\n\nSegue as notícias de hoje.\n\n`;

      if (client.birthDate && client.birthDate.getDate() === new Date().getDate() &&
          client.birthDate.getMonth() === new Date().getMonth()) {
        message += 'Feliz aniversário!\n\n';
      }

    const unprocessedNews = news.filter(item => !item.processed);

    if (unprocessedNews.length === 0) {
      console.log('Email já enviado com todas as notícias');
    }

    for (const item of unprocessedNews) {
      message += `<a href="${item.link}">${item.title}</a>\n${item.description}\n\n`;
    }
    
    await transporter.sendMail({
      from: 'rafavalpint@gmail.com',
      to: client.email,
      subject: 'Notícias do dia!',
      html: message.replace(/\n/g, '<br>'), 
    });

      for (const item of unprocessedNews) {
        await this.newsService.markAsProcessed(item.id);
      }
    }
  }
}