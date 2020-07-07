import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from 'src/app/shared/order-item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: []
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>
  ) { }

  ngOnInit(): void {
    this.formData={
      NaruceniProizvodID: null,
      NarudzbaID: this.data.NarudzbaID,
      ProizvodID: 0,
      Proizvod:'',
      Cijena: 0,
      Kolicina:0,
      Ukupno:0
    }
  }

}
