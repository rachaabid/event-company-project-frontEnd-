import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  listCompanys: any;
 companyForm?: FormGroup;
 submitted = false;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanys();
    this.companyForm = new FormGroup ({
      companyName: new FormControl('', Validators.required),
      descriptionName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl(''),
      photo: new FormControl('')
    })
  }

  loadCompanys(){
    this.companyService.getCompanys().subscribe(data =>this.listCompanys=data);
  }

  addCompany(){
   this.submitted = true;
   if (this.companyForm?.invalid){
    return
   }
   this.companyService.addCompany(this.companyForm?.value).subscribe(data=>{this.loadCompanys();})
  }

}
