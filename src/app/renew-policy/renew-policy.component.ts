import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renew-policy',
  templateUrl: './renew-policy.component.html',
  styleUrls: ['./renew-policy.component.css'],
})
export class RenewPolicyComponent implements OnInit {
  renewPolicyForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {}

  onClickRenewPolicy(): void {
    this.route.navigate(['/user-page']);
  }
}
