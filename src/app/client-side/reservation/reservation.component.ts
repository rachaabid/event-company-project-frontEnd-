import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  contactForm?: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup ({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
  })
  }

  reserve(){

  }

}
