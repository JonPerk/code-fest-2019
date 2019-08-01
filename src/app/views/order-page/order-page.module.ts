import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ShopComponent } from './shop/shop.component';
import { ListComponent } from './list/list.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    OrderPageRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [ OrderPageComponent, OrderHistoryComponent, ShopComponent, ListComponent,
    ShopCategoryComponent, OrderDetailComponent]
})
export class OrderPageModule { }
