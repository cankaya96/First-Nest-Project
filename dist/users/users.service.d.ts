import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterStrategy } from './strategies/register.strategy';
export declare class UsersService {
    private prisma;
    private registerStrategy;
    constructor(prisma: PrismaService, registerStrategy: RegisterStrategy);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any>;
    findEnabled(): Promise<any>;
    findDisabled(): Promise<any>;
    findByEmail(email: string): Promise<any>;
    remove(id: number): Promise<any>;
}
