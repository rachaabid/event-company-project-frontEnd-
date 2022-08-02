import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL='http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  createEvent(event: any){
    return this.http.post(`${this.baseURL}Events`, event);
  }

  getEvents(){
    return this.http.get(`${this.baseURL}Events`);
  }

  getTags()
  {
   return this.http.get(`${this.baseURL}listTags`)
  }

 getEventById(idEvent: any){
  return this.http.get(`${this.baseURL}Events/${idEvent}`);
 }

 removeEvent(idEvent: any){
  return this.http.delete(`${this.baseURL}Events/${idEvent}`);
 }

 saveUpdate(idEvent: any, data: any){
  return this.http.put(`${this.baseURL}Events/${idEvent}`, data);
 }
}
