import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterStrategy } from './strategies/register.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, RegisterStrategy],
})
export class UsersModule {}
