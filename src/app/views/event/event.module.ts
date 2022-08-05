import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { EventFilterPipe } from './pipes/event-filter.pipe';


@NgModule({
  declarations: [
    EventComponent,
    EventFilterPipe
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule
  ]
})
export class EventModule { }
