import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterStrategy } from './strategies/register.strategy';
export declare class UsersService {
    private prisma;
    private registerStrategy;
    constructor(prisma: PrismaService, registerStrategy: RegisterStrategy);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }[]>;
    findEnabled(): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }[]>;
    findDisabled(): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }[]>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }>;
}
