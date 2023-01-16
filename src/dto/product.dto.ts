import { Category } from "../models/category.model";
import { Product } from "../models/product.model";


export interface CreateProductDto extends Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'> {
    categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}