import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../Interfaces/product.interface';
import { ProductInput } from '../Inputs/product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getOneProduct(id: string): Promise<Product> {
    return await this.productModel.filter(p => id === p.id);
  }

  async createProduct(createProductDto: ProductInput): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }
}
