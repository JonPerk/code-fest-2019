import { DamageReportComponent } from './damage-report/damage-report.component';
import { AutoOrderComponent } from './auto-order/auto-order.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDataComponent } from './product-data/product-data.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customer Setting'
    },
    children: [
      {
        path: '',
        redirectTo: 'customer-setting'
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        data: {
          title: 'User Profile'
        }
      },
      {
        path: 'auto-order',
        component: AutoOrderComponent,
        data: {
          title: 'Auto Order Setting'
        }
      },
      {
        path: 'product-data',
        component: ProductDataComponent,
        data: {
          title: 'Product Data'
        }
      },
      {
        path: 'damage-report',
        component: DamageReportComponent,
        data: {
          title: 'Damage Report'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerSettingRoutingModule { }
