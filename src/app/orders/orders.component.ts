import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: []
})
export class OrdersComponent implements OnInit {
  orderList;

  constructor(private service:OrderService) { }

  ngOnInit(): void {
    this.service.getOrderList().then(res => this.orderList = res);
  }

}
