import { ShoppingItem } from './shopping-item';

export class Order {
    id: number;
    orderDate: Date;
    orderTotal: number;
    shoppingItem: ShoppingItem[];

    constructor() {
        this.id = null;
        this.orderDate = null;
        this.orderTotal = null;
        this.shoppingItem = [];
    }
}
