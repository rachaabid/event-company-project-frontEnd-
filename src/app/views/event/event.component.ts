import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  listEvents: any;
  eventForm?: FormGroup;
  submitted = false;
  id: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
    this.eventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      eventDescription: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate:new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      photo: new FormControl(''),
      price: new FormControl('', Validators.required),
      availableTicketNumber: new FormControl('', Validators.required),
      eventType: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    })
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(data => this.listEvents = data);
  }

  addEvent() {
    this.submitted = true;
    if (this.eventForm?.invalid) {
      return
    }
    this.eventService.createEvent(this.eventForm?.value).subscribe(data=>{
      console.log(data);
      location.reload()
    }, (error)=>{
      console.log(error);
    }
      )

  }

  showEventData(id: any){
    this.id=id;
    this.eventService.getEventById(id).subscribe(data=>{this.eventForm?.patchValue(data);})
   }
 
   saveChanges(){
     this.submitted = true;
     if(this.eventForm?.invalid){
       return
     }
     this.eventService.saveUpdate(this.id, this.eventForm?.value).subscribe(data=>location.reload(), 
     (error)=>{
      console.log(error)})
   }

   deleteEvent(i: any){
    this.eventService.removeEvent(i).subscribe(data=>{this.ngOnInit();})
  }

}
