import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: []
})
export class OrdersComponent implements OnInit {
  orderList;

  constructor(private service:OrderService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getOrderList().then(res => this.orderList = res);
  }
  refreshList() {
    this.service.getOrderList().then(res => this.orderList = res);
  }

  openForEdit(orderID: number){
    this.router.navigate(['/order/edit/' + orderID]);
  }
  onOrderDelete(id: number) {
    if (confirm('Potvrdite otkazivanje rezervacije!')) {
      this.service.deleteOrder(id).then(res => {
        this.refreshList();
        this.toastr.warning("Uspješno Otkazano", "Filip Car Parts Shop.");
      });
    }
  }

}
