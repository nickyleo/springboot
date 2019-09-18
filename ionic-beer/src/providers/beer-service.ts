import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class BeerService {
  public API = 'http://localhost:8080';
  public BEER_API = this.API + '/beers';

  constructor(public http: HttpClient) {
  }

  getGoodBeers(): Observable<any> {
    return this.http.get(this.API + '/good-beers').pipe(map((res: Response)=> res.json()as any));
  }
}