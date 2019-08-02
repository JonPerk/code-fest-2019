
import { Message } from '../../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-root',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent  implements OnInit {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
  }
  ngOnInit() {
}
}
