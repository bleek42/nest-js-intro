import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  readonly name: string;
  @Field(() => Float)
  readonly price: number;
  @Field()
  readonly description: string;
}
