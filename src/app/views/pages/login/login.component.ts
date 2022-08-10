import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {LoginService} from 'src/app/views/pages/login/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
logForm?: FormGroup;
submitted= false;
  constructor(private route: Router, private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.logForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
  })
  }

  login(){
    this.submitted=true;
    if (this.logForm?.invalid){
      return
    }
    this.loginService.signIn(this.logForm?.value).subscribe((response: any)=>{ 
      localStorage.setItem('token', response.token)
      this.toastr.success('Welcome to dashboard', 'Hello')
      this.route.navigate(['/dashboard']);
    }, error=>{
      console.log(error)
    })
  }
   
}
