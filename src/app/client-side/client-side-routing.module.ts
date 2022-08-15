import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '', component: ClientSideComponent,
    children: [
      {
        path:'home', component: HomeComponent
      },
      {
        path:'events', component: EventListComponent
      },
      {
        path:'events/event-details/:id', component: EventDetailsComponent
      },
      {
        path:'events/event-details/:id/reservation', component: ReservationComponent
      }
    ]
  },
  {
    path: 'navbar', component: NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
