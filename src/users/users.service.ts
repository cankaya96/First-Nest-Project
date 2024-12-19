import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterStrategy } from './strategies/register.strategy';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private registerStrategy: RegisterStrategy
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isValid = await this.registerStrategy.validate(createUserDto);
    
    if (!isValid) {
      throw new ConflictException(this.registerStrategy.getErrorMessage());
    }

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
