import { Component, OnInit } from '@angular/core';
import { IExchange } from '../converter/exchange';
import { CurrencyService } from '../_services/currency.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  currencies: any[];
  errorMessage: any;
  exchange:IExchange={
    currency: '',
    currencyName: '',
    exchangeRate: 0
  };
  form:any={};
  currencyId:number;

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
  openModal(c:any,cId:number):void{
     this.exchange.currency=c.currency;
     this.exchange.currencyName=c.currencyName;
     this.exchange.exchangeRate=c.exchangeRate;
     this.currencyId=cId;
    console.log(this.currencyId);
     document.getElementById('modal-1').style.display='block';
     document.body.classList.add('jw-modal-open');
  }
  closeModal(){
    document.getElementById('modal-1').style.display='none'
    document.body.classList.remove('jw-modal-open');

  }
  onSubmit():void{
    this.currencyService.updateCurrency(this.exchange,this.currencyId).subscribe(
      data => {

        console.log(data);
        this.fetchCurrency();
      },
      err => {
        this.errorMessage = err.error.message;
      }

    );

  }

}
