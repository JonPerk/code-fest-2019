import { BotComponent } from './bot.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BotRoutingModule } from './bot-routing.module';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '../../components';

@NgModule({
  imports: [
    BotRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    BotComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
  ],
})
export class BotModule { }