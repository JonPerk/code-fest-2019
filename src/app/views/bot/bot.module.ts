import { BotComponent } from './bot.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BotRoutingModule } from './bot-routing.module';

import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    BotRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    BotComponent,
  ],
})
export class BotModule { }
