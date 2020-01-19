import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';

import { Product } from '../shared/product';
import { ShoppingItem } from '../shared/shopping-item';
import { AppState } from '../store/app-state';
import { AddItemAction } from '../store/shopping.actions';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products: Product[];

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.products = Product.getProducts;
    }

    addToCart(selectedProduct: Product): void {
        const newShoppingItem = {
            id: uuid(),
            quantity: 1,
            price: selectedProduct.productPrice,
            product: selectedProduct
        } as ShoppingItem;

        this.store.dispatch(new AddItemAction(newShoppingItem));
    }
}
