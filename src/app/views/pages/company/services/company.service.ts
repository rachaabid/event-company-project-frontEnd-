import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseURL='localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  addCompany(company: any){
    return this.http.post(`${this.baseURL}Companys`, company);
  }

  getCompanys(){
    return this.http.get(`${this.baseURL}Companys/`);
  }

 getCompanyById(companyId: any){
  return this.http.get(`${this.baseURL}Companys/`+companyId);
 }

 deleteCompany(companyId: any){
  return this.http.delete(`${this.baseURL}Companys/`+companyId);
 }

 saveUpdate(companyId: any, data: any){
  return this.http.put(`${this.baseURL}Companys/`+companyId, data);
 }
}
