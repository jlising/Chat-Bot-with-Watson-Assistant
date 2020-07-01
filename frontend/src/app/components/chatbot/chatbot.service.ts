import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http'; //Http in angular 2 resturns observable while in angular 1 it returns promise.
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatBotService {
    private url = environment.apiEndpointUrl;

    // Inject private classes via constructor
    constructor (private _http: HttpClient){}

	public submitMessage(body : any) : Observable<any> {
            return this._http.post(this.url + "/talk", body);
  }
}
