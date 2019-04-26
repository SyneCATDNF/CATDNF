import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { MessageHandler } from './message.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'cat-message',
  templateUrl: './message.component.html'
})
export class ToastMessageComponent implements OnInit {
  title = 'cat-Portal';
  isAlive = true;

  constructor(private messageService: MessageService, private messageHandler: MessageHandler){

  }
  ngOnDestroy() {
    this.isAlive = false;
  }
  ngOnInit() {
    this.messageHandler.getEntityValue()
   .pipe(takeWhile(() => this.isAlive))
    .subscribe((msg) =>{
      this.messageService.add(msg);
    });
  }
}
