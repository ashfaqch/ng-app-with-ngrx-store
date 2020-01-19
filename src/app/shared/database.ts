import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './order';

export class Database implements InMemoryDbService {
    createDb() {
        const orders = [
            {
                id: 1,
                orderDate: new Date('11/26/2019'),
                orderTotal: 699.99,
                shoppingItem: [
                    {
                        id: '911f93e0-19e9-4105-8130-f68bafba1657',
                        quantity: 1,
                        price: 699.99,
                        product: {
                            productId: '5',
                            productName: 'iPhone 11',
                            productPrice: 699.99,
                        }
                    }
                ],
            }
        ] as Order[];

        return { orders };
    }
}
