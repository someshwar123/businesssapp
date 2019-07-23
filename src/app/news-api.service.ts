import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '95bd9ec0111f4bcd8b1544a37f46fc75';

  constructor(private http:HttpClient) { }
  initSources(){
    return this.http.get('./assets/source.json');
 }
 initArticles(){
  return this.http.get('./assets/article.json');
 }
 
}



//   initSources(){
//      return this.http.get('./assets/shopping.js');
//   }
//   initArticles(){
//    return this.http.get('./assets/shopping.js');
//   }

// }
