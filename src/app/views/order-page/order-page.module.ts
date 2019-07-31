import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { OrderPageRoutingModule } from './order-page-routing.module';
import { OrderPageComponent } from './order-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ShopComponent } from './shop/shop.component';
import { ListComponent } from './list/list.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';

@NgModule({
  imports: [
    OrderPageRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ OrderPageComponent, OrderHistoryComponent, ShopComponent, ListComponent, ShopCategoryComponent ]
})
export class OrderPageModule { }
