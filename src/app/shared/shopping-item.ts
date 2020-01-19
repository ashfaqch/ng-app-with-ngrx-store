import { Product } from 'src/app/shared/product';

export interface ShoppingItem {
  id: string;
  quantity: number;
  price: number;
  product: Product;
}
