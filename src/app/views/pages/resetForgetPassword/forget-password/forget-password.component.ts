import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login/services/login.service';
import {ForgetPasswordService} from '../services/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
email: any = '';
forgetForm?: FormGroup;
logForm?: FormGroup;
submitted = false;
  constructor(private forgetService: ForgetPasswordService, private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.logForm =new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password :  new FormControl('', Validators.required)
  }) 
    this.forgetForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
  })
  }

  forgetPassword(){
    this.forgetService.forget(this.forgetForm?.value).subscribe(response=>{
      console.log(response);
    });
  }

  login(){
    this.submitted=true;
    if (this.forgetForm?.invalid){
      return
    }
    this.loginService.signIn(this.forgetForm?.value);
    this.route.navigate(['/dashboard']);
  }

}
