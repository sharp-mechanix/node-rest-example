# Node.JS REST API

Used libraries:
- [express.js](https://expressjs.com/) as HTTP server
- [Prisma](https://www.prisma.io/) as ORM
- [AutoMapper](https://automapperts.netlify.app/) for mapping entities to DTOs
- [FluentValidation](https://github.com/alexjpotter/fluentvalidation-ts) for validating requests

Steps to run this project:

1. Run `npm install` command
2. Apply migrations via `npx prisma migrate dev` (for development only)
3. Run `npm run dev` command

Building project:

1. Run `npm install` command
2. Apply migrations via `npx prisma migrate deploy` (for test/staging/production)
3. Run `npm run build` command
4. Use artifacts from `./dist` directory