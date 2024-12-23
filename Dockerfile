FROM node:18

WORKDIR /usr/src/app

# Install build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm prisma generate

EXPOSE 3000

# Wait for PostgreSQL to be ready and run migrations
CMD ["/bin/sh", "-c", "sleep 5 && pnpm prisma migrate deploy && pnpm run start:dev"]
