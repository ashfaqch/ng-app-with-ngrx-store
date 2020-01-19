import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Observable } from 'rxjs';
import { Order } from '../shared/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orders$ = this.orderService.getAll();
  }
}
