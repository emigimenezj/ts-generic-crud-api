import axios from "axios";
import { CreateProductDto } from "./dto/product.dto";
import { Category } from "./models/category.model";
import { Product } from "./models/product.model";
import { BaseHttpService } from "./services/base-http.service";


(async () => {
    /*
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<Product>(url1);

    const res1 = await productService.getAll();
    console.log('products', res1.length);

    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService<Category>(url2);

    const res2 = await categoryService.getAll();
    console.log('categories', res2.length);
    */
    async function getProducts(): Promise<Product[]> {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products');
        return res.data;
    }
    
    async function createProduct(newProduct: CreateProductDto): Promise<Product['id']> {
        const res = await axios.post<Product>('https://api.escuelajs.co/api/v1/products', newProduct);
        return res.data.id;
    }

    const product = await createProduct({
        title: 'Holaaaa!',
        price: 99999,
        description: 'Un saludo bueno.',
        images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=7719"],
        categoryId: 3,
    });
    console.log(product);
})();