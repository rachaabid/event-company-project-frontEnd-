import { Component, OnInit } from '@angular/core';
import { EventService } from '../../views/event/services/event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  listEvents: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: any) => {this.listEvents = data},
    (error)=>{
      console.log(error);
    });

  }

}
