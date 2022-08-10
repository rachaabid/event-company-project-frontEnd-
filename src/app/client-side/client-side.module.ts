import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientSideComponent,
    HomeComponent,
    EventListComponent,
    EventDetailsComponent,
    ReservationComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientSideModule { }
