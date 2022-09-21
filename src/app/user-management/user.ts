import { Iroles } from "./role";

export interface Iuser{
  id:number;
  username:string;
  email:string;
  phone:string;
  roles:Iroles[];

}
