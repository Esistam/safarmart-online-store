import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { SharedModule } from '../shared/shared/shared.module';
import { OrdersComponent } from './components/orders/orders.component';
@NgModule({
  declarations: [
    DefaultComponent,
    FooterComponent,
    HeaderComponent,
    CartItemsComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
