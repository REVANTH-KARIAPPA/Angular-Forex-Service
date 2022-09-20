import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { IProduct } from './products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService,private token: TokenStorageService) { }

  currentUser: any;
  products : IProduct[];
  uId:number=0;
  content:string='';
  cId:number=0;
  cartTotal:number=0;
  popup: boolean=false;
  check:boolean=false;
  demo:any;
   ngOnInit(): void {

        this.currentUser =  this.token.getUser();
        this.uId=this.currentUser.id;
        this.cId=this.currentUser.cart.cartId;
        this.fetchData();

  }
   onDelete(pid:number):void{
    this.productService.deleteProductFromCart(pid,this.cId).subscribe(
      ()=> {
      this.fetchData();
  },
  err => {
    this.content = JSON.parse(err.error).message;
  });
  this.products = this.products.filter(item => item.productId != pid);
  }

   delGet(pid:number){
  this.onDelete(pid);

  }
  // getCartTotal():number{
  //   for(let p in this.products){
  //     const v = this.products[p]
  //     var sum=0;
  //     sum=sum+ v.prize;
  //   }
  //   console.log('sum=',sum);
  //   return sum;
  // }

  fetchData(){
    this.productService.getCart(this.uId).subscribe(
      data => {
       this.products=  data;
       if(this.products.length==0)
        {
            this.check=false;
        }
        else{
          this.check=true;
        }

     },
     err => {
       this.content = JSON.parse(err.error).message;
     }
   );
  }

  placeOrder(p:IProduct[]):void{
     this.productService.placeOrder(p,this.currentUser.id).subscribe(
      data => {
        this.fetchData();

      },
      err => {

      }
    );
    this.products=[];

  }

  orderPlaced(p:IProduct[]):void{

    this.placeOrder(p);
    this.popup=true;
    this.check=false;
    console.log(this.check);

  }

}
