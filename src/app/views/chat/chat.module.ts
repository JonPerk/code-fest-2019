import { ChatComponent } from './chat.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ChatRoutingModule } from './chat-routing.module';

import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    ChatRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    ChatComponent,
  ],
})
export class ChatModule { }
