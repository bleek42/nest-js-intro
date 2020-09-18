import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsResolver } from './products.resolver';
import { ProductsSchema } from './products.schema';
import { ProductsService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductsSchema }]),
  ],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
