import { Component, OnInit } from '@angular/core';
import { IProduct } from '../cart/products';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { IOrder } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  constructor(private productService: ProductService,
              private token: TokenStorageService,
              ) { }
  currentUser: any;
  orders:IOrder[];
  uId:number=0;
  content: any;
  popup:boolean=false;
  ngOnInit(): void {

    this.currentUser =  this.token.getUser();
    this.uId=this.currentUser.id;
    this.fetchOrder();

}

canOrder(oId:number):void{
    this.productService.cancleOrder(this.uId,oId).subscribe(
       data=>{
        this.content=  data;

      }
    );
   this.orders=this.orders.filter(o=>o.orderId!=oId);
}
fetchOrder():void{

  this.productService.getOrder(this.uId).subscribe(
    data => {
      this.orders=data;
      console.log(data);

   },
    err => {
      this.content = JSON.parse(err.error).message;
    }
  );

}
cancleOrder(oId:number):void{
  this.canOrder(oId);


}

}
