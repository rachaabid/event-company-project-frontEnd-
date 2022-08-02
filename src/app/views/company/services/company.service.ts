import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseURL='http://localhost:3000/api/v1/';

  
  constructor(private http: HttpClient) { }

  createCompany(company: any){
    return this.http.post(`${this.baseURL}Companies`, company);
  }

  getCompanies(){
    return this.http.get(`${this.baseURL}Companies`);
  }

 getCompanyById(companyId: any){
  return this.http.get(`${this.baseURL}Companies/${companyId}`);
 }

 removeCompany(companyId: any){
  return this.http.delete(`${this.baseURL}Companies/${companyId}`);
 }

 saveUpdate(companyId: any, data: any){
  return this.http.put(`${this.baseURL}Companies/${companyId}`, data);
 }

 
}
