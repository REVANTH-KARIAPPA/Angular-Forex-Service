import { Component,HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../order/order';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';

import { IPayment } from './payment';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  oid: number;
  currentUser: any;
  orders: IOrder;
  payment: IPayment={
    paymentId:0,
    paymentAmount: 0,
    method: "online",
    email: "",
  };
  content: string;
  popup:boolean=false;
  message: any="not yet started";
  status:boolean=true;

  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_wVTHeU94XK5SIL",
    "amount": "000",
    "name": "Woodo",
    "description": "for furniture",
    "image": "/assets/img/furnitures.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "username",
      "email": "username@email.com",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };


  constructor(private productService: ProductService,
    private token: TokenStorageService,
    private route: ActivatedRoute) {
    this.oid = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log(this.oid);

  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.payment.email=this.currentUser.email;


  this.options.prefill.name = this.currentUser.username;
  this.options.prefill.contact="0000000000";
  this.options.prefill.email = this.currentUser.email;
    this.fetchOrderById();


  }
  fetchOrderById() {

    this.productService.orderById(this.oid).subscribe(
      data => {
        this.orders = data;
        console.log(this.orders.status);
        this.payment.paymentAmount=this.orders.orderTotal;
        this.payment.paymentId=this.orders.payment.paymentId;
        // console.log(data);
        this.options.amount=(this.orders.orderTotal * 100).toString();
       },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  sendPayment(): void {
    this.productService.doPayment(this.orders.payment.paymentId,this.oid,this.payment).subscribe(
      data => {

        //  console.log("this is"+data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }


  paynow():void{

    this.sendPayment();
    this.fetchOrderById();
    this.status=false;


    this.paymentId = '';
    this.error = '';
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
    // this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
    this.popup=true;
    
  }

}
