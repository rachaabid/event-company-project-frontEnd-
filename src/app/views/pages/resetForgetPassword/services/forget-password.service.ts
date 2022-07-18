import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  baseURL='localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  forget(email: string){
    return this.http.post(`${this.baseURL}forgotPassword`, email);
  }
}
