import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';



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
}
