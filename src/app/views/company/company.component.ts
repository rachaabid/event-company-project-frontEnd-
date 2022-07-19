import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CompanyService} from './services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyForm?: FormGroup;
  submitted = false;
  listCompanies: any;
  id: any;
  constructor(private companyService: CompanyService,
    private route: Router) { }

  ngOnInit(): void {
    this.loadCompanies();
    this.companyForm = new FormGroup ({
      companyName: new FormControl('', Validators.required),
      companyDescription: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl(''),
      photo: new FormControl('')
    })
  }

  loadCompanies(){
    this.companyService.getCompanies().subscribe(data =>this.listCompanies=data);
  }

  showCompanyData(id: any){
    this.id=id;
    console.log(id);
    this.companyService.getCompanyById(id).subscribe(data=>{this.companyForm?.patchValue(data)})
   }
 
   saveChanges(){
     this.submitted = true;
     if(this.companyForm?.invalid){
       return
     }
     this.companyService.saveUpdate(this.id, this.companyForm?.value).subscribe(data=>location.reload(), (error)=>{
      console.log(error);
     })
   }

  addCompany(){
    this.submitted = true;
    if (this.companyForm?.invalid){
     return
    }
    this.companyService.createCompany(this.companyForm?.value).subscribe(data=>{
      console.log(data);
      location.reload()
    }, (error)=>{
      console.log(error);
    }
      )

  }

  deleteCompany(i: any){
    this.companyService.removeCompany(i).subscribe(data=>{this.ngOnInit();})
  }

}

