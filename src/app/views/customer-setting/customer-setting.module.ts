import { CustomerSettingComponent } from './customer-setting.component';
import { AutoOrderComponent } from './auto-order/auto-order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomerSettingRoutingModule } from './customer-setting-routing.module';

@NgModule({
  imports: [
    CustomerSettingRoutingModule,
    CommonModule
  ],
  declarations: [
    CustomerSettingComponent,
    UserProfileComponent,
    AutoOrderComponent
  ],
})
export class CustomerSettingModule { }
