import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { OrderService } from '../shared/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
    order = { shoppingItem: [] } as Order;

    constructor(private orderService: OrderService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                const id = +params.id;
                this.getOrder(id);
            }
        );
    }

    getOrder(id: number): void {
        this.orderService.getWithId(id)
            .subscribe(
                data => this.order = data,
                error => { }
            );
    }
}
