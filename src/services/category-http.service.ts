import { CreateCategoryDto, UpdateCategoryDto } from "../dto/category.dto";
import { Category } from "../models/category.model";
import { BaseHttpService } from "./base-http.service";

export class CategoryHttpService {
    private url = 'https://api.escuelajs.co/api/v1/categories';
    private http = new BaseHttpService<Category>(this.url);

    async getAll(): Promise<Category[]> { return this.http.getAll(); }

    async getOne(id: Category['id']): Promise<Category> { return this.http.getOne(id); }

    async create(dto: CreateCategoryDto): Promise<Category['id']> {
        const category = await this.http.create(dto);
        return category.id;
    }

    async update(id: Category['id'], dto: UpdateCategoryDto): Promise<Category['id']> {
        const category = await this.http.update(id, dto);
        return category.id;
    }

    async delete(id: Category['id']): Promise<boolean> {
        return this.http.delete(id);
    }
}