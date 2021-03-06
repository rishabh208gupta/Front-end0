import { Customer } from './Customer';
import { Status } from './Status';

export class Vehicle{
    vehicleId:number;
    vehicleType:string;
    manufacturer:string;
    model:string;
    dlNo:number;
    purchaseDate:Date;
    registrationNo:number;
    engineNo:number;
    chasisNo:string;
    customer:Customer = new Customer();
}

export class VehicleRegistrationStatus extends Status{

    vehicleId:number;
}

export class UserVehicle{
    vehicleId:number;
    vehicleType:string;
    chasisNo:string;
    manufacturer:string;
    purchaseDate:Date;
    registrationNo:number;
}