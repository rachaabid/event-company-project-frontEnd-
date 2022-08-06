import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
              private route: Router,
              private toastr: ToastrService) { }
  ngOnInit(): void {
    this.companyForm = new FormGroup ({
      companyName: new FormControl('', Validators.required),
      companyDescription: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
  })
}

register(){
this.submitted =true;
if (this.companyForm?.invalid){
  return
}
// localStorage.setItem('token', JSON.stringify(JSON.parse(localStorage.getItem('token')||'[]')))
this.registerService.signup(this.companyForm?.value).subscribe(response=>{
this.toastr.warning('Company created', 'Hello')
}, error=>{
  console.log(error);
});
this.route.navigate(['/login']);
}
}
