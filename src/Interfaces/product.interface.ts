import { from } from 'rxjs';
import { Document } from 'mongoose';
import { isStringLiteral } from 'typescript';

export interface Product extends Document {
  readonly name: string;
  readonly price: number;
  readonly description: string;
}
