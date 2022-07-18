import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/views/pages/login/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
companyForm?: FormGroup;
submitted= false;
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
  })
  }

  login(){
    this.submitted=true;
    if (this.companyForm?.invalid){
      return
    }
    this.loginService.signIn(this.companyForm?.value);
    this.route.navigate(['/dashboard']);
  }
   
}
