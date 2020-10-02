import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{StatusClaim} from '../models/statusClaim'
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http:HttpClient) { }
  displayOnClaimPage(customerId:any):Observable<any>{
    let url="http://localhost:9090/claimpage?customerId="+customerId;
    return this.http.get(url);
  }
  onClickingClaim(policyNo:number,reason:string):Observable<StatusClaim>{
    let url="http://localhost:9090/claimstatus?policyNo="+policyNo+"&reason="+reason;
    return this.http.get<StatusClaim>(url);
  }
}
