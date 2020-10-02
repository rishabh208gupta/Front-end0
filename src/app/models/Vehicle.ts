import { Customer } from './Customer';

export class Vehicle{
    vehicleId:number;
    vehicleType:string;
    manufacturer:string;
    model:string;
    dlNo:number;
    purchaseDate:Date;
    registrationNo:number;
    engineNo:number;
    chasisNo:number;
    customer:Customer = new Customer();
}