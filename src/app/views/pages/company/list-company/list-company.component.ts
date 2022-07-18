import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {
 listCompanys: any;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanys();
  }

  loadCompanys(){
    this.companyService.getCompanys().subscribe(data =>this.listCompanys=data);
  }

  deleteCompany(i: any){
    this.companyService.deleteCompany(i).subscribe(data=>{this.loadCompanys();})
  }
}
