import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        password: string;
        created_date: Date;
        modified_date: Date;
        id: number;
    }>;
    findAll(): Promise<{
        email: string;
        password: string;
        created_date: Date;
        modified_date: Date;
        id: number;
    }[]>;
}
