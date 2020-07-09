import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: []
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);
    if(this.data.orderItemIndex == null)
    {
    this.formData={
      NaruceniProizvodID: null,
      NarudzbaID: this.data.NarudzbaID,
      ProizvodID: 0,
      ProizvodNaziv:'',
      Cijena: 0,
      Kolicina:0,
      Ukupno:0
    }
  }else{
    this.formData = Object.assign({},this.orderService.orderItems[this.data.orderItemIndex]);
  }
  }
  updatePrice(ctrl){
    if(ctrl.selectedIndex == 0){
      this.formData.Cijena = 0;
      this.formData.ProizvodNaziv ='';
    }
    else{
      this.formData.Cijena = this.itemList[ctrl.selectedIndex-1].Cijena;
      this.formData.ProizvodNaziv = this.itemList[ctrl.selectedIndex-1].Naziv;

    }
    this.updateTotal();
  }
  updateTotal(){
    this.formData.Ukupno = parseFloat((this.formData.Kolicina * this.formData.Cijena).toFixed(2));
  }

  onSubmit(form:NgForm){
    if(this.validateForm(form.value)){
      if(this.data.orderItemIndex == null)
      {
      this.orderService.orderItems.push(form.value);
      }else{
      this.orderService.orderItems[this.data.orderItemIndex] = form.value
      }
      this.dialogRef.close();

    }

  }

  validateForm(formData:OrderItem){
    this.isValid = true;
    if(formData.ProizvodID == 0){
      this.isValid = false;
    }else if(formData.Kolicina ==0){
    this.isValid = false;
    }
    return this.isValid;


  }

}
