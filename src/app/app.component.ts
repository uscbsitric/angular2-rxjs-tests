// Two nice articles here regarding how to import Observable and how to import RXJS operators
// https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse  
// <for Property 'map' does not exist on type 'Observable<Response>'>

// https://stackoverflow.com/questions/36947748/angular-2-beta-17-property-map-does-not-exist-on-type-observableresponse
// <Angular 2 beta.17: Property 'map' does not exist on type 'Observable<Response>'>

// https://stackoverflow.com/questions/45553341/should-i-use-both-import-rxjs-rx-and-import-observable-from-rxjs-obse

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// the article this code is based:  https://blog.angular-university.io/angular-http/
// ERROR handling article: https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/error_handling.html
import { Component, OnInit } from '@angular/core';






import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';
import { HttpParams } from '@angular/common/http';


interface MockServerData
{
  status1: string;
	status2: string;
	status3: string;
	status4: string;
	status5: string;
}

interface PutRequestPayload
{
  dataFromAngularCourseListIcon: string;
  dataFromAngularDescription: string;
  dataFromAngularIconUrl: string;
  dataFromAngularLongDescription: string;
  dataFromAngularUrl: string;
}

interface PatchRequestPayload
{
  dataFromAngularIconUrl: string;
  dataFromAngularLongDescription: string;
  dataFromAngularUrl: string;
}

interface PostRequestPayload
{
  dataFromAngularIconUrl: string;
  dataFromAngularLongDescription: string;
  dataFromAngularUrl: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  courses$: Observable<MockServerData>;
  requestURL = 'http://mockserver.local/mockserver.php';
  requestURL2 = 'http://mockserver.local/mockserver2.php';

  putRequestPayload: PutRequestPayload;
  patchRequestPayload: PatchRequestPayload;
  postRequestPayload: PostRequestPayload;
  

  constructor(private http:HttpClient)
  {
    
  }

  ngOnInit()
  {
    const key = 'someKey';
    const params = new HttpParams().set('orderBy', key)
                                   .set('limitToFirst', '11111111111');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.putRequestPayload = {'dataFromAngularCourseListIcon': '.../main-page-logo-small-hat.png',
                              'dataFromAngularDescription': 'Angular Tutorial For Beginners TEST',
                              'dataFromAngularIconUrl': '.../angular2-for-beginners.jpg',
                              'dataFromAngularLongDescription': '...A very Long Description Here...',
                              'dataFromAngularUrl': 'new-value-for-url'
                             };

    this.patchRequestPayload = {'dataFromAngularIconUrl': 'value1',
                                'dataFromAngularLongDescription': 'value2',
                                'dataFromAngularUrl': 'value3',
                               };

    this.postRequestPayload = {'dataFromAngularIconUrl': 'test data 1';
                               'dataFromAngularLongDescription': 'test data 2';
                               'dataFromAngularUrl': 'test data 3';
                              };



/*     // WORKING HTTP GET Code
    this.courses$ = this.http
                        .get<MockServerData>(this.requestURL, {'headers': headers, 'params': params})
                        .map(data => { const debugAnchor = '';
                                       return _.values(data);
                                     }
                            )
                        .do(console.log); */
    


    /* this.courses$ = this.http.put<MockServerData>(this.requestURL, 
                                                  this.putRequestPayload, {'headers': headers,
                                                                           'params': params
                                                                          }
                                                 )
                             .map( data => { const debugAnchor2 = '';
                                             return _.values(data);
                                           }
                                 ); */
                             /* .subscribe(// success
                                           successResult => { let debugVal1 = '';
                                                              debugVal1 = '111';
                                                            },
                                          // failure
                                           errorResult => { let debugVal2 = '';
                                                            debugVal2 = '222';
                                                          },
                                          // complete
                                          () => { let debugVal3 = '';
                                                  debugVal3 = '333';
                                                }
                                       ); */





    /* THIS IS A WORKING PUT REQUEST WITH ERROR CATCHER
    this.http.put(this.requestURL,
                  this.putRequestPayload,
                  {'headers': headers
                  }
                 )
             .subscribe( result => { let debugVar1 = '';
                                     debugVar1 = '111';
                                   },
                         error => { let debugVar2 = '';
                                    debugVar2 = '222';
                                  },
                         () => { let debugVar3 = '';
                                 debugVar3 = '333';
                               }
                       );
    */


    /*
    this.http.put(this.requestURL,
                  this.patchRequestPayload,
                  {'headers': headers
                  }
                 )
              .subscribe( result => { let debugVar1 = '';
                                      debugVar1 = '111';
                                    },
                          error => { let debugVar2 = '';
                                     debugVar2 = '222';
                                   },
                          () => { let debugVar3 = '';
                                  debugVar3 = '333';
                                }
                        );
    */

    this.http.post(this.requestURL,
                   this.postRequestPayload,
                   {'headers': headers}
                  )
             .subscribe( result => { let debugVar1 = '';
                                     debugVar1 = '111';
                                   },
                         error => { let debugVar2 = '';
                                    debugVar2 = '222';
                                  },
                         () => { let debugVar3 = '';
                                 debugVar3 = '333';
                               }
                        );


  }
}
