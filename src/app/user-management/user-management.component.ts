import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Iuser } from './user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  currentUser: any;
  users:Iuser[];
  errorMessage: any;

  constructor(private userService: UserService,
    private token: TokenStorageService,) { }

  ngOnInit(): void {
    this.currentUser =  this.token.getUser();
    this.fetchUsers();
  }
  fetchUsers():void{
    this.userService.getPublicContent().subscribe(
      data => {
        this.users=data;
        console.log(data);


      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
  onDelete(uId:number):void{
    this.userService.deleteUser(uId).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
    this.users=this.users.filter(u=>u.id!=uId);
  }

}
