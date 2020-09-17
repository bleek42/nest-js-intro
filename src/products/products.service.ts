import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(name: string, price: number, description: string, image: any) {
    const newProd = new Product(uuidV4(), name, price, description, image);
    this.products.push(newProd);
  }
}
