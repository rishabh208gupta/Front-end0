import {Payment}from './payment'
export class RenewPolicy extends Payment{
    policyDuration:number;
    statusConfirmation:boolean;
    policyNo:number;

}
export class RenewPayment extends Payment{
    statusConfirmation:boolean;
    policyDuration:number;
}