import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  @Input() hero;
  
  constructor() { }


  ngOnInit() {
  }

}
