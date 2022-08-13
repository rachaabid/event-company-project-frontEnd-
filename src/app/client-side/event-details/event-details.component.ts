import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/views/event/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  idEvent: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEvent = this.route.snapshot.params['id'];
    this.eventService.getEventById(this.idEvent).subscribe(response => this.event = response);
  }


}
