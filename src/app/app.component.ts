// Two nice articles here regarding how to import Observable and how to import RXJS operators
// https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse  
// <for Property 'map' does not exist on type 'Observable<Response>'>

// https://stackoverflow.com/questions/36947748/angular-2-beta-17-property-map-does-not-exist-on-type-observableresponse
// <Angular 2 beta.17: Property 'map' does not exist on type 'Observable<Response>'>

// https://stackoverflow.com/questions/45553341/should-i-use-both-import-rxjs-rx-and-import-observable-from-rxjs-obse

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// the article this code is based:  https://blog.angular-university.io/angular-http/
import { Component, OnInit } from '@angular/core';






import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';
import { HttpParams } from '@angular/common/http';



/* interface RequestHeadersResult
{
  'Accept': string;
  'Accept-Encoding': string;
  'Accept-Language': string;
  'Connection': string;
  'Host': string;
  'Origin': string;
  'Referer': string;
  'User-Agent': string;
} */

interface MockServerData
{
  status1: string;
	status2: string;
	status3: string;
	status4: string;
	status5: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  courses$: Observable<MockServerData[]>;
  requestURL = 'http://mockserver.local/mockserver.php';

  constructor(private http:HttpClient)
  {
    
  }

  ngOnInit()
  {
    const key = 'someKey';
    const params = new HttpParams().set('orderBy', key)
                                   .set('limitToFirst', "11111111111");

    this.courses$ = this.http
                        .get<MockServerData>(this.requestURL, {params})
                        .map(data => { const debugAnchor = '';
                                       return _.values(data);
                                     }
                            )
                        .do(console.log);
  }
}
