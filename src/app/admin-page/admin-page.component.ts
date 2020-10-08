import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  admin : Admin = new Admin();
  errMessage: string;
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  adminCheck(form : NgForm){
    if (form.valid){
    console.log(JSON.stringify(this.admin));
    
    this.adminService.adminLogin(this.admin).subscribe((data) => {
      console.log(data);
      if (data.status == true) {
        
        sessionStorage.setItem('adminId', String(data.adminId));
        sessionStorage.setItem('username', data.username);
        
      }
      this.router.navigate(['/dashboard']);
    });
  }
  else{
    this.errMessage = 'Invalid username/password';
  }
}
}
export class Admin{
    adminId: number;
    username: string;
    password: string;
}

export class AdminStatus{
  status: boolean;
  statusMessage: string;
  adminId: number;
  username: string;
}
