import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';

    const routes: Routes = [
        {path:'',redirectTo:'order',pathMatch:'full'},
        {path: 'orders', component:OrdersComponent},
        {path: 'order',children:[
          {path:'',component:OrdersComponent},
          {path:'edit/:id',component:OrdersComponent}

        ]}
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }