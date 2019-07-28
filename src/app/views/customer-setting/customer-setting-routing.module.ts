import { AutoOrderComponent } from './auto-order/auto-order.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: 'user-profile',
        component: UserProfileComponent,
        data: {
          title: 'Track Order'
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
