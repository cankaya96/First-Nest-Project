import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class RegisterStrategy {
  constructor(private prisma: PrismaService) {}

  async validate(createUserDto: CreateUserDto): Promise<boolean> {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    return !existingUser;
  }

  getErrorMessage(): string {
    return 'Email already exists';
  }
}
