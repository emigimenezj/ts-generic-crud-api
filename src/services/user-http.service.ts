import { CreateUserDto, UpdateUserDto } from "../dto/user.dto";
import { User } from "../models/user.model";
import { BaseHttpService } from "./base-http.service";

export class UserHttpService {
    private url = 'https://api.escuelajs.co/api/v1/users';
    private http = new BaseHttpService<User>(this.url);

    async getAll(): Promise<User[]> { return this.http.getAll(); }

    async getOne(id: User['id']): Promise<User> { return this.http.getOne(id); }

    async create(dto: CreateUserDto): Promise<User['id']> {
        const user = await this.http.create(dto);
        return user.id;
    }

    async update(id: User['id'], dto: UpdateUserDto): Promise<User['id']> {
        const user = await this.http.update(id, dto);
        return user.id;
    }

    async delete(id: User['id']): Promise<boolean> {
        return this.http.delete(id);
    }
}