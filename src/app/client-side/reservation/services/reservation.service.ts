import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseURL='http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  createReservation(idEvent: any, reservation: any){
    return this.http.post(`${this.baseURL}Reservation/${idEvent}`, reservation);
  }
}
