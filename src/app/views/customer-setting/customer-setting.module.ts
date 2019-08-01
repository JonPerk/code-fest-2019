import { CustomerSettingComponent } from './customer-setting.component';
import { AutoOrderComponent } from './auto-order/auto-order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomerSettingRoutingModule } from './customer-setting-routing.module';
import { ProductDataComponent } from './product-data/product-data.component';
import { DamageReportComponent } from './damage-report/damage-report.component';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    CustomerSettingRoutingModule,
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    CustomerSettingComponent,
    UserProfileComponent,
    AutoOrderComponent,
    ProductDataComponent,
    DamageReportComponent
  ],
})
export class CustomerSettingModule { }
