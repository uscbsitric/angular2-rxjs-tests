// Two nice articles here regarding how to import Observable and how to import RXJS operators
// https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse  
// <for Property 'map' does not exist on type 'Observable<Response>'>

// https://stackoverflow.com/questions/36947748/angular-2-beta-17-property-map-does-not-exist-on-type-observableresponse
// <Angular 2 beta.17: Property 'map' does not exist on type 'Observable<Response>'>

// https://stackoverflow.com/questions/45553341/should-i-use-both-import-rxjs-rx-and-import-observable-from-rxjs-obse

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
import { Component, OnInit } from '@angular/core';






import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';





interface Course 
{
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  courses$: Observable<Course[]>;
  requestURL = 'http://mockserver.local/mockserver.php';

  constructor(private http:HttpClient)
  {
    
  }

  ngOnInit()
  {
    this.courses$ = this.http
                        .get<Course[]>(this.requestURL)
                        .map(data => { _.values(data);
                                       const debugAnchor = '';
                                     }
                            )
                        .do(console.log);
  }
}
