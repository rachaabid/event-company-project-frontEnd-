import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseURL='http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  createTag(tag: any){
    return this.http.post(`${this.baseURL}Tags`, tag);
  }

  getTags(){
    return this.http.get(`${this.baseURL}Tags`);
  }

 getTagById(idTag: any){
  return this.http.get(`${this.baseURL}Tags/`+idTag);
 }

 removeTag(idTag: any){
  return this.http.delete(`${this.baseURL}Tags/`+idTag);
 }

 saveUpdate(idTag: any, data: any){
  return this.http.put(`${this.baseURL}Tags/`+idTag, data);
 }
}
