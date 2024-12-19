import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: {
        name: string;
        email: string;
    }): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: string, data: {
        name?: string;
        email?: string;
    }): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
}
