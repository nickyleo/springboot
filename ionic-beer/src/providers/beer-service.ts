import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService {
  public API = 'http://localhost:8080';
  public BEER_API = this.API + '/beers';

  constructor(public http: HttpClient) {
  }

  getGoodBeers(): Observable<any> {
    return this.http.get(this.API + '/good-beers').map((res:Response)=>res.json());
  }
}