import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: []
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);

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
