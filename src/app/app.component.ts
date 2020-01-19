import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppingItem } from './shared/shopping-item';
import { AppState } from './store/app-state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    shoppingItems$: Observable<ShoppingItem[]>;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.shoppingItems$ = this.store.select(store => store.shopping);
    }
}
