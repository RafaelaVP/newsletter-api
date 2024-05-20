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

# Backend Challenge - Newsletter

This project is a backend system for registration and sending of newsletter emails. It allows the registration of clients and news via Web API. Every day at 08:00, the system checks the records and sends emails with the registered news that have not yet been processed to the registered emails. If a birth date was registered for a client, the system sends a "happy birthday" if the current date is the same as the birth date.

## Technologies Used

- Node.js
- TypeScript
- Prisma
- MailHog
- Docker
- Swagger

## How to Run the Project

1. Clone the repository to your machine.

2. Install the project dependencies with the command `npm install`.

3. Start the database and MailHog services with Docker Compose using the command `docker-compose up`.

4. Run the Prisma migrations with the command `npx prisma migrate dev`.

5. Start the server with the command `npm start`.

## API Documentation

The API documentation is available through Swagger. You can access it at `http://localhost:3000/api-docs`.

## Testing the System

To test the system, you can use any HTTP client to make requests to the API. The available endpoints are:

- `POST /clients`: To register a new client.
- `POST /news`: To register a new news.

To test the sending of emails, you can use the MailHog web interface, which is available at `http://localhost:8025`.

## Notes

This project uses MailHog to simulate the sending of emails. MailHog is an email testing tool that captures and displays emails sent by the application. This allows us to see exactly what is being sent without actually sending emails to real addresses.

The database used is PostgreSQL, and the management of tables and records is done through Prisma, an ORM for TypeScript and JavaScript.

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