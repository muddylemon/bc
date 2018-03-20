import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class FeedsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPrices() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/')
      .map((response) => {
        return response;
      })
      .catch( this.handleError );
  }



  private handleError(error: HttpResponse<any>) {
    console.error('FeedsService::handleError', error);
    return Observable.throw(error);
  }

}
