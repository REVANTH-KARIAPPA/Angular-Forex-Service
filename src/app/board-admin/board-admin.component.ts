import { Component, OnInit } from '@angular/core';
import { IProduct } from '../board-customer/product';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;
  products : IProduct[];
  currentUser: any;

  constructor(private productService: ProductService,
              private token: TokenStorageService) { }

  ngOnInit(): void {
    this.fetchdata();


  }
  fetchdata():void{
    this.productService.getNotApprovedProducts().subscribe(
      data => {
        this.products= data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  approve(productId :number): void {
    this.productService.approveProduct(productId).subscribe(
      data => {
        console.log(productId);

      },
      err => {

      }
    );
  }


  appfetch(productId :number):void{
     this.approve(productId);
     this.fetchdata();
  }


  deleteProduct(productId:number):void{
    this.productService.deleteProduct(productId).subscribe(
      data => {
        console.log(productId);

      },
      err => {

      }
    );
  }
  delfetch(productId:number):void{
    this.deleteProduct(productId);
    this.fetchdata();
 }

}
