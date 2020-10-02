import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http:HttpClient) { }
  displayOnClaimPage(customerId:any):Observable<any>{
    let url="http://localhost:9090/claimpage?customerId="+customerId;
    return this.http.get(url);
  }
}
