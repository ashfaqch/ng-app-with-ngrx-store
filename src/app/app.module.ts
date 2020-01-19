import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './product/product-list.component';
import { CartItemsComponent } from './cart/cart-items.component';
import { CartDetailComponent } from './cart/cart-detail.component';
import { OrderListComponent } from './order/order-list.component';
import { OrderDetailComponent } from './order/order-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingReducer } from './store/shopping.reducer';
import { environment } from '../environments/environment';
import { Database } from './shared/database';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ProductListComponent,
        CartItemsComponent,
        CartDetailComponent,
        OrderListComponent,
        OrderDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(Database),
        StoreModule.forRoot({
            shopping: ShoppingReducer
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
