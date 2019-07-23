import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }
  messages : any =[];
   
  add(message:string){
       this.messages.push(message);
    }
    clear() {
      this.messages = [];
    } 
  
}
