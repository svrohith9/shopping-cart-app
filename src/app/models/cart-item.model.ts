// cart-item.model.ts
import { Product } from './product.model';

export interface CartItem {
  product: Product; // Include a 'product' property of type 'Product'
  quantity: number;
}
