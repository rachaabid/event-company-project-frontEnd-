import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
 companyForm?: FormGroup;
 listCompanys: any;
 id: any;
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

  showCompanyData(id: any){
   this.id=id;
   this.companyService.getCompanyById(id).subscribe(data=>{this.companyForm?.patchValue(data);})
  }

  saveChange(){
    this.submitted = true;
    if(this.companyForm?.invalid){
      return
    }
    this.companyService.saveUpdate(this.id, this.companyForm?.value).subscribe(data=>{this.loadCompanys();})
  }
}
