import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpResponse } from '@angular/common/http';
import BitcoinHistory from '../data/bitcoinHistory';
import EthereumHistory from '../data/ethereumHistory';

@Injectable()
export class FeedsService {

  constructor(
    private http: HttpClient
  ) { }
// https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20130428&end=20180404

  getBitcoinHistory(){
    console.log(BitcoinHistory)
    return BitcoinHistory.slice(0,200);
  }


  getEthereumHistory(){
    console.log(EthereumHistory)
    return EthereumHistory.slice(0,200);
  }

  getPrices(): Observable<any[]>{
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/')
      .map((response) => {
        console.log(response);
        return response;
      })
      .catch( this.handleError );
  }



  private handleError(error: HttpResponse<any>) {
    console.error('FeedsService::handleError', error);
    return Observable.throw(error);
  }

}
