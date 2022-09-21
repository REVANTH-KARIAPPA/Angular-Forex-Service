import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';
import { ICurrency } from '../converter/converter';
import { IExchange } from '../converter/exchange';



const httpOptions = {
		  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getAllCurrency(): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'currency/all', httpOptions);
  }

  converter(c:ICurrency):Observable<any>{
    return this.http.post(AppConstants.API_URL + 'currency/convert',c,httpOptions);
  }
  updateCurrency(e:IExchange,cId:number):Observable<any>{
    return this.http.put(AppConstants.API_URL+'currency/update/'+cId,e,httpOptions);
  }
  addCurrency(e:IExchange):Observable<any>{
    return this.http.post(AppConstants.API_URL+'currency/create',e,httpOptions);
  }
}
