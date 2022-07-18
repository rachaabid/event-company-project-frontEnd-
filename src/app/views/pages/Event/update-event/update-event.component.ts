import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {
  eventForm?: FormGroup;
  listEvents: any;
  id: any;
  submitted = false;
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
      photo: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      availableTicketNumber: new FormControl('', Validators.required),
      eventType: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    })
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(data => this.listEvents = data);
  }

  showEventData(id: any){
    this.id=id;
    this.eventService.getEventById(id).subscribe(data=>{this.eventForm?.patchValue(data);})
   }
 
   saveChange(){
     this.submitted = true;
     if(this.eventForm?.invalid){
       return
     }
     this.eventService.saveUpdate(this.id, this.eventForm?.value).subscribe(data=>{this.loadEvents();})
   }
}
