import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { addProduct } from './addproduct';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content: string;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  popup : boolean=false;

  constructor(private userService: UserService,
              private productService: ProductService,
              private token: TokenStorageService
    ) { }

  ngOnInit(): void {
     this.currentUser =  this.token.getUser();
  }
  onSubmit(){

    this.productService.addProduct(this.form).subscribe(
      data => {
        console.log(data);
        console.log(this.form);

      },
      err => {
        this.errorMessage = err.error.message;

      }
    );
    this.popup=true;
  }

}