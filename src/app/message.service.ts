import { Injectable } from '@angular/core';

import { OthermessageService } from "./othermessage.service";

@Injectable()
export class MessageService {
othermsg:string=" ";
  constructor(private _othermessage:OthermessageService) {
 
   }
   getmessage(){
    return 'welcome devsoft solution'
   }
//  getmessageotherservice(){
//    this.othermsg=this._othermessage.getothermessage();
//     return this.othermsg;
//  }
}
