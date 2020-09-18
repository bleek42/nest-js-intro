import { ObjectType, Field, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field(() => Float)
  readonly price: number;
  @Field()
  readonly description: string;
}
