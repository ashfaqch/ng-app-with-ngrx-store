import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { CartDetailComponent } from './cart/cart-detail.component';
import { OrderDetailComponent } from './order/order-detail.component';
import { OrderListComponent } from './order/order-list.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'cart-detail', component: CartDetailComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'order-detail/:id', component: OrderDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
