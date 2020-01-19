import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppingItem } from '../shared/shopping-item';
import { AppState } from '../store/app-state';
import { DeleteItemAction, DeleteAllItemAction, UpdateItemAction } from '../store/shopping.actions';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order';

@Component({
    selector: 'app-cart-detail',
    templateUrl: './cart-detail.component.html'
})
export class CartDetailComponent implements OnInit {
    shoppingItems$: Observable<ShoppingItem[]>;
    cartSubtotal: number;
    items: ShoppingItem[];
    isOrderCreated = false;
    order = { shoppingItem: [] } as Order;
    quantities: any[] = [1, 2, 3];

    constructor(private store: Store<AppState>,
                public router: Router,
                private orderService: OrderService) { }

    ngOnInit() {
        this.shoppingItems$ = this.store.select(store => store.shopping);
        this.calculateSubtotal();
    }

    removeItemFromCart(id: any): void {
        this.store.dispatch(new DeleteItemAction(id));
        this.calculateSubtotal();
    }

    calculateSubtotal(): void {
        this.shoppingItems$.subscribe(x => this.items = x);
        this.cartSubtotal = this.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    }

    onQuantityChange(shoppingItem: ShoppingItem) {
        const quantity: number = Number(shoppingItem.quantity);
        shoppingItem.quantity = quantity;
        shoppingItem.price = shoppingItem.product.productPrice * Number(quantity);
        this.store.dispatch(new UpdateItemAction(shoppingItem));
        this.calculateSubtotal();
    }

    proceedToCheckout(): void {
        const newOrder = new Order();
        newOrder.orderDate = new Date();
        newOrder.shoppingItem = this.items;
        newOrder.orderTotal = this.cartSubtotal;

        this.orderService.add(newOrder)
            .subscribe(
                (response: any) => this.order = response,
                (error: any) => { },
                () => {
                    this.afterOrderCreated();
                }
            );
    }

    afterOrderCreated(): void {
        this.store.dispatch(new DeleteAllItemAction());
        this.isOrderCreated = true;
        this.router.navigate(['/order-detail', this.order.id]);
    }
}
