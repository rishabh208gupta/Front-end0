import{Status} from './Status';
export class StatusClaim{
    claimId:number;
    statusMessage:string;
    status:boolean;
}
export class RenewStatus extends Status{
    policyNo:number;
}