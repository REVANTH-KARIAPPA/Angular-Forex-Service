import { IProduct } from "../board-customer/product";
import { IPayment } from "../payment/payment";

export interface IOrder{
  orderId:number;
  orderTotal:number;
  payment:IPayment;
  status:boolean,
  products: IProduct[];

}
