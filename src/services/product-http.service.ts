import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductHttpService {
    private url = 'https://api.escuelajs.co/api/v1/products';
    private http = new BaseHttpService<Product>(this.url);

    async getAll(): Promise<Product[]> { return this.http.getAll(); }

    async getOne(id: Product['id']): Promise<Product> { return this.http.getOne(id); }

    async create(dto: CreateProductDto): Promise<Product['id']> {
        const product = await this.http.create(dto);
        return product.id;
    }

    async update(id: Product['id'], dto: UpdateProductDto): Promise<Product['id']> {
        const product = await this.http.update(id, dto);
        return product.id;
    }

    async delete(id: Product['id']): Promise<boolean> {
        return this.http.delete(id);
    }
}