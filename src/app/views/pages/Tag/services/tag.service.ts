import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseURL='localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  addTag(tag: any){
    return this.http.post(`${this.baseURL}Tags`, tag);
  }

  getTags(){
    return this.http.get(`${this.baseURL}Tags/`);
  }

 getTagById(tagId: any){
  return this.http.get(`${this.baseURL}Tags/`+tagId);
 }

 deleteTag(tagId: any){
  return this.http.delete(`${this.baseURL}Tags/`+tagId);
 }

 saveUpdate(tagId: any, data: any){
  return this.http.put(`${this.baseURL}Tags/`+tagId, data);
 }
}
