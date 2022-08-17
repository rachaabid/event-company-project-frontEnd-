import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/views/event/services/event.service';
import { ReservationService } from './services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  contactForm?: FormGroup;
  submitted = false;
  idEvent: any;
  event: any;
  constructor(private reservationService: ReservationService, private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })

    this.idEvent = this.route.snapshot.params['id'];
    this.eventService.getEventById(this.idEvent).subscribe(response => this.event = response);
  }

  reserve() {
    this.submitted = true;
    if (this.contactForm?.invalid) {
      return
    }
    this.reservationService.createReservation(this.idEvent, this.contactForm?.value).subscribe(data => {
      location.reload(),
        this.toastr.success('Mail sent successfully', 'Good'),
        (error: any) => {
          console.log(error);
          this.toastr.error('Some error occured', 'Error')
        }
    })
  }

}
