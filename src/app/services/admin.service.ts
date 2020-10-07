import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, AdminStatus } from '../admin-page/admin-page.component';
import{AdminApproval} from '../models/AdminApproval';
import{Vehicle} from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }

  adminUrl: string = 'http://localhost:9090/adminpage';

  adminLogin(admin: Admin): Observable<AdminStatus>{
    return this.http.post<AdminStatus>(this.adminUrl,admin);
  }


  fetchAllClaims():Observable<any>{
    let url='http://localhost:9090/fetchallclaims';
    return this.http.get<any>(url);

  }
  fetchUserInfo(claimId:number):Observable<any>{
    let url="http://localhost:9090/userdetails?claimId="+claimId;
    return this.http.get(url);
  }
  claimApproval(adminApproval:AdminApproval):Observable<any>{
    let url="http://localhost:9090/adminapproval";
    return this.http.post(url,adminApproval);

  }
  fetchVehicle(claimId:number):Observable<Vehicle>{
    let url="http://localhost:9090/vehiclebyclaimid?claimId="+claimId;
    return this.http.get<Vehicle>(url);

  }
  
}
