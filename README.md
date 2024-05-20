<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

# Desafio de Backend - Newsletter

Este projeto é um sistema backend para cadastro e envio de e-mail de newsletter. Ele permite o cadastro de clientes e notícias via API Web. Todos os dias às 08h, o sistema consulta os registros e dispara e-mails com as notícias cadastradas e não processadas ainda para os e-mails cadastrados. Se uma data de nascimento foi cadastrada para um cliente, o sistema envia junto um “feliz aniversário" se a data corrente for a mesma do nascimento.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Prisma
- MailHog
- Docker
- Swagger

## Como Rodar o Projeto

1. Clone o repositório para a sua máquina.

2. Instale as dependências do projeto com o comando `npm install`.

3. Inicie os serviços de banco de dados e MailHog com o Docker Compose usando o comando `docker-compose up`.

4. Execute as migrações do Prisma com o comando `npx prisma migrate dev`.

5. Inicie o servidor com o comando `npm start`.

## Documentação da API

A documentação da API está disponível através do Swagger. Você pode acessá-la em `http://localhost:3000/api-docs`.

## Testando o Sistema

Para testar o sistema, você pode usar qualquer cliente HTTP para fazer requisições para a API. Os endpoints disponíveis são:

- `POST /clients`: Para cadastrar um novo cliente.
- `POST /news`: Para cadastrar uma nova notícia.

Para testar o envio de e-mails, você pode usar a interface web do MailHog, que está disponível em `http://localhost:8025`.

## Observações

Este projeto utiliza o MailHog para simular o envio de e-mails. O MailHog é uma ferramenta de teste de e-mail que captura e exibe e-mails enviados pela aplicação. Isso permite que possamos ver exatamente o que está sendo enviado sem realmente enviar e-mails para endereços reais.

O banco de dados utilizado é o PostgreSQL, e o gerenciamento das tabelas e registros é feito através do Prisma, um ORM para TypeScript e JavaScript.


## Contributing

Fork the repository.
Create a new branch: git checkout -b feature/feature-name.
Make your modifications and commit: git commit -m 'Add new feature'.
Push your changes to the remote repository: git push origin feature/feature-name.
Create a new Pull Request on Bitbucket.

## License

Nest is [MIT licensed](LICENSE).

## Contact

If you have any questions or suggestions, please contact:

Rafaela Valerio - rafavalpint@gmail.com
Project on Github: https://github.com/RafaelaVP/newsletter-api