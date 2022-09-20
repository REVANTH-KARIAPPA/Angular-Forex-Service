import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { IProduct } from './product';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;
  products : IProduct[];
  currentUser: any;
  popup:boolean=false;

  constructor(private productService: ProductService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.productService.getUserBoard().subscribe(
      data => {
        this.products= data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.cart.cartId);

  }
  addToCart(productId :number): void {
    this.productService.addToCart(productId,this.currentUser.cart.cartId).subscribe(
      data => {
        console.log(data);

      },
      err => {

      }
    );

    this.popup = true
  }

}
