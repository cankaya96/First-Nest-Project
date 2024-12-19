FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm prisma generate

EXPOSE 3000

# Wait for PostgreSQL to be ready and run migrations
CMD ["/bin/sh", "-c", "sleep 5 && pnpm prisma migrate deploy && pnpm run start:dev"]
