import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {
 listEvents: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEvents().subscribe(data =>this.listEvents=data);
  }

  deleteEvent(i: any){
    this.eventService.deleteEvent(i).subscribe(data=>{this.loadEvents();})
  }

}
