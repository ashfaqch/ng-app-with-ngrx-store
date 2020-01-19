import { Product } from '../shared/product';

export interface ShoppingItem {
  id: string;
  quantity: number;
  price: number;
  product: Product;
}
