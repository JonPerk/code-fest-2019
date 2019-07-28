import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Order'
    },
    children: [
      {
        path: '',
        redirectTo: 'order-page'
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        data: {
          title: 'Order History'
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'shop',
        component: ShopComponent,
        data: {
          title: 'Shop'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPageRoutingModule {}
