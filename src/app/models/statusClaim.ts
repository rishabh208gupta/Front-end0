import{Status} from './Status';
export class StatusClaim{
    claimId:number;
    statusMessage:string;
    status:boolean;
}
<<<<<<< HEAD

export class UserClaim{
    claimId:number;
    claimed:boolean;
    claimAmount:number;
=======
export class RenewStatus extends Status{
    policyNo:number;
>>>>>>> d269370cd0b2a3939417315be4c3ca900c0bc602
}