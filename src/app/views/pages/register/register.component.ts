import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterService} from 'src/app/views/pages/register/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  companyForm?: FormGroup;
  submitted = false;
  constructor(private registerService: RegisterService,
    private route: Router) { }
  ngOnInit(): void {
    this.companyForm = new FormGroup ({
      companyName: new FormControl('', Validators.required),
      descriptionName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
  })
}

register(){
this.submitted =true;
if (this.companyForm?.invalid){
  return
}
this.registerService.signup(this.companyForm?.value);
this.route.navigate(['/login']);
}
}
