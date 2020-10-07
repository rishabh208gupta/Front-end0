import { Status } from '../models/Status';

export class PremiumStatus extends Status{
    idvComp1:number;
    idvComp2:number;
    idvComp3:number;
    idvParty1:number;
    idvParty2:number;
    idvParty3:number;

    amountComp1:number;
    amountComp2:number;
    amountComp3:number;
    amountParty1:number;
    amountParty2:number;
    amountParty3:number;
}