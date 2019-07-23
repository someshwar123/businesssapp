import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  selectedHero;

  heroes1;

  constructor(private heroService: DataService) { }

  ngOnInit() {
    this.getHeroe();
  }

  onSelect(hero): void {
    this.selectedHero = hero;
  }

  getHeroe() {
  this.heroService.getHeroes().subscribe(
         data => {this.heroes1= data['data']}
       );
}
}


