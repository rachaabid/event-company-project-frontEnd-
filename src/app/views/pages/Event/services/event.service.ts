import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL='localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  addEvent(event: any){
    return this.http.post(`${this.baseURL}Events`, event);
  }

  getEvents(){
    return this.http.get(`${this.baseURL}Events/`);
  }

 getEventById(eventId: any){
  return this.http.get(`${this.baseURL}Events/`+eventId);
 }

 deleteEvent(eventId: any){
  return this.http.delete(`${this.baseURL}Events/`+eventId);
 }

 saveUpdate(eventId: any, data: any){
  return this.http.put(`${this.baseURL}Events/`+eventId, data);
 }
}
