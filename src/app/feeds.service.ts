import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FeedsService {

  constructor(
    private http: Http
  ) { }

  public getPrices() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/')
      .map(response => {
        return response.json();
      })
      .catch( this.handleError );
  }



  private handleError(error: Response | any) {
    console.error('FeedsServiceß::handleError', error);
    return Observable.throw(error);
  }

}
