"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const register_strategy_1 = require("./strategies/register.strategy");
const argon2 = require("argon2");
let UsersService = class UsersService {
    constructor(prisma, registerStrategy) {
        this.prisma = prisma;
        this.registerStrategy = registerStrategy;
    }
    async create(createUserDto) {
        const isValid = await this.registerStrategy.validate(createUserDto);
        if (!isValid) {
            throw new common_1.ConflictException(this.registerStrategy.getErrorMessage());
        }
        const hashedPassword = await argon2.hash(createUserDto.password);
        return this.prisma.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
            },
        });
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findEnabled() {
        return this.prisma.user.findMany({
            where: { enable: true },
        });
    }
    async findDisabled() {
        return this.prisma.user.findMany({
            where: { enable: false },
        });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
    async remove(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.ConflictException('Böyle bir kullanıcı bulunamamıştır');
        }
        if (!user.enable) {
            throw new common_1.ConflictException('Bu kullanıcı hesabı daha önceden kaldırılmıştır');
        }
        return this.prisma.user.update({
            where: { id },
            data: { enable: false },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        register_strategy_1.RegisterStrategy])
], UsersService);
//# sourceMappingURL=users.service.js.map