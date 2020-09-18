import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductType } from 'src/dto/create-product.dto';
import { ProductsService } from './products.service';
import { ProductInput } from '../Inputs/product.input';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductType])
  async products() {
    return await this.productsService.getProducts();
  }

  @Query(() => ProductType)
  async product(@Args('id', { type: () => String }) id: string) {
    return await this.productsService.getOneProduct(id);
  }

  @Mutation(() => ProductType)
  async newProduct(@Args('input') input: ProductInput) {
    return await this.productsService.createProduct(input);
  }
}
