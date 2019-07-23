import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
uname="";
httpdata;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("./assets/user.json")
    .subscribe((data) => this.displaydata(data));
 }
 displaydata(data) {this.httpdata = data;}
}


