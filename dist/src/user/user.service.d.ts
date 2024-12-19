export declare class UserService {
    private prisma;
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
    findOne(id: number): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, data: {
        name?: string;
        email?: string;
    }): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
}
