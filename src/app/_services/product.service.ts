import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';
import { IProduct } from '../board-customer/product';


const httpOptions = {
		  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(AppConstants.API_URL + 'product/approved', httpOptions);
  }

  deleteProductFromCart(Pid:number,Cid :number): Observable<any> {
    return this.http.put(AppConstants.API_BASE_URL+ 'cart/'+Cid+'/rep/'+Pid,httpOptions);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'user/me', httpOptions);
  }
  addToCart(Pid:number,Cid :number): Observable<any> {
    return this.http.put(AppConstants.API_BASE_URL+ 'cart/'+Cid+'/product/'+Pid,httpOptions);
  }
  getCart(uid:number): Observable<any> {
    return this.http.get(AppConstants.API_BASE_URL + 'cart/'+uid, httpOptions);
  }
  getOrder(uid:number): Observable<any> {
    return this.http.get(AppConstants.API_BASE_URL + 'order/'+uid, httpOptions);
  }
  cancleOrder(uid:number,oid:number):Observable<any>{
    return this.http.delete(AppConstants.API_BASE_URL+'order/'+oid+'/user/'+uid,httpOptions);
  }





  placeOrder(products:IProduct[],uid:number): Observable<any> {
    return this.http.post<IProduct[]>(AppConstants.API_BASE_URL + 'order/'+uid+'/products',products, httpOptions);
  }


  getNotApprovedProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(AppConstants.API_URL + 'product/not-approved', httpOptions);
  }

  approveProduct(pId:number):Observable<any>{
    return this.http.put(AppConstants.API_URL+'product/approve/'+pId,httpOptions);
  }

  deleteProduct(pId:number):Observable<any>{
    return this.http.delete(AppConstants.API_URL+'product/'+pId,httpOptions);
  }


 

}
