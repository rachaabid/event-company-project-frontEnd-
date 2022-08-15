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
    this.eventService.getEventsNotStarted().subscribe((response: any) => {this.listEvents = response},
    (error)=>{
      console.log(error);
    });

  }

}
