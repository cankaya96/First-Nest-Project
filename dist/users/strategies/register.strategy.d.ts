import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class RegisterStrategy {
    private prisma;
    constructor(prisma: PrismaService);
    validate(createUserDto: CreateUserDto): Promise<boolean>;
    getErrorMessage(): string;
}
