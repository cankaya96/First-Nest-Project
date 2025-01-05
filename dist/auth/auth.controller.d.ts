import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
