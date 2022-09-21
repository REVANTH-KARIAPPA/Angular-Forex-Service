import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../_services/currency.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  currencies: any[];
  errorMessage: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.fetchCurrency();
  }

  fetchCurrency():void{
    this.currencyService.getAllCurrency().subscribe(
      data => {
        this.currencies=data;
        console.log(data);


      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

}
