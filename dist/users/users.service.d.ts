import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterStrategy } from './strategies/register.strategy';
export declare class UsersService {
    private prisma;
    private registerStrategy;
    constructor(prisma: PrismaService, registerStrategy: RegisterStrategy);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        password: string;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
        id: number;
    }>;
    findAll(): Promise<{
        email: string;
        password: string;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
        id: number;
    }[]>;
    remove(id: number): Promise<{
        email: string;
        password: string;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
        id: number;
    }>;
}
