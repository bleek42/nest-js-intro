import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ProductsResolver {
  //   constructor(private ProductsService) {}
  //     @Query()
  //     async product() {
  //       return await this.ProductsService.getAllProducts();
  //     }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
