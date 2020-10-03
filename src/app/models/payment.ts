import { NewPolicy } from './new-policy';
import { Status } from './Status';
export class Payment{
    paymentId:number;
    paymentMode:string;
    paymentDate:Date;
    amount:number;
    newPolicy:NewPolicy=new NewPolicy();
}

export class PaymentStatus extends Status{
    policyNo:number;
}