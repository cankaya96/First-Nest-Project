import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    remove(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        enable: boolean;
        created_date: Date;
        modified_date: Date;
    }>;
}
