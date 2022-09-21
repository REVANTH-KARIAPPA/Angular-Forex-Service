import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../converter/converter';
import { IExchange } from '../converter/exchange';
import { CurrencyService } from '../_services/currency.service';

@Component({
  selector: 'app-addexchange',
  templateUrl: './addexchange.component.html',
  styleUrls: ['./addexchange.component.css']
})
export class AddexchangeComponent implements OnInit {

  form:IExchange={
    currency: '',
    currencyName: '',
    exchangeRate: 0
  };
  constructor(private currencyService :CurrencyService) {

  }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.form);
  }

}
