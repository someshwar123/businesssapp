import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mArticles:Array<any>;
  mSources:Array<any>;
  public customerData:any;
  public searchText:string;
  search;
  constructor(private newsapi:NewsApiService) { }


  ngOnInit() {  //load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  //load news sources
  this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
  }
  searchArticles(source){
    console.log("selected source is: "+JSON.stringify(source));
    this.search=this.mArticles.filter(article => {
      return source.id===article.id;
    })
    {
      this.customerData = [
        {"name": 'Anil kumar', "Age": 34, "blog" :'https://code-view.com'},
        {"name": 'Sunil Kumar Singh', "Age": 28, "blog" :'https://code-sample.xyz'},
        {"name": 'Sushil Singh', "Age": 24, "blog" :'https://code-sample.com'},
        {"name": 'Aradhya Singh', "Age": 5, "blog" :'https://code-sample.com'},
        {"name": 'Reena Singh', "Age": 28, "blog" :'https://code-sample.com'},
        {"name": 'Alok Singh', "Age": 35, "blog" :'https://code-sample.com'},
        {"name": 'Dilip Singh', "Age": 34, "blog" :'https://code-sample.com'}];
    }

    console.log("selected source is: "+JSON.stringify(this.search));


  }

}
