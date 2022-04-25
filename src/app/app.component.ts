import { Component, VERSION } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[MessageService]
})
export class AppComponent  {
  name = 'Angular d ' + VERSION.major;
  msg:string;
  constructor(private _messageservice:MessageService){

  }
  ngOnInit(){
    this.msg=this._messageservice.getmessage();
  }
}
