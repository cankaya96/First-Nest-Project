import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any>;
    findEnabled(): Promise<any>;
    findDisabled(): Promise<any>;
    remove(id: string): Promise<any>;
}
