import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../_services/currency.service';
import { ICurrency } from './converter';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  form: ICurrency = {
    amount: 1,
    fromCurrency: '',
    toCurrency: ''
  };
  currencies: any[];
  errorMessage: any;
  amountDto:any={};

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.fetchCurrency();
  }

  onSubmit():void{

    this.currencyService.converter(this.form).subscribe(
      data => {
        console.log(data);
        this.amountDto=data;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
  selected(): void {

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
