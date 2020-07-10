import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order;
  orderItems:OrderItem[];

  constructor(private http: HttpClient) { }

  saveOrUpdateOrder(){
    var body={
      ...this.formData,
      NaruceniProizvodi: this.orderItems
    }
    return this.http.post(environment.apiURL+'/Narudzba', body);
  }

  getOrderList(){
    return this.http.get(environment.apiURL+'/Narudzba').toPromise();
  }
}
