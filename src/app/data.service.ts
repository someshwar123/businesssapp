import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private messageService: MessageService,
    private httpservice: HttpClient
  ) { }

  getHeroes() {
    this.messageService.add('HeroService: fetched heroes');
    return this.httpservice.get('./assets/f.json')
    // TODO: send the message _after_ fetching the heroes

  }
}
