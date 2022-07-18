import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  listEvents: any;
  eventForm?: FormGroup;
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

  addEvent() {
    this.submitted = true;
    if (this.eventForm?.invalid) {
      return
    }
    this.eventService.addEvent(this.eventForm?.value).subscribe(data => { this.loadEvents(); })
  }

}
