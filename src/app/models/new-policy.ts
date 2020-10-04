import { Vehicle } from './Vehicle';
import { Status } from './Status';
export class NewPolicy{
    policyNo:number;
    policy:Policy=new Policy();
    vehicle:Vehicle = new Vehicle();


}

export class Policy{
    policyId:number;
    policyType:string;
    policyDuration:number;
}

export class PolicyRegistrationStatus extends Status{
    policyNo:number;
}

export class UserPolicy{
    policyNo:number;
    policyType:string;
    policyDuration:number;
}