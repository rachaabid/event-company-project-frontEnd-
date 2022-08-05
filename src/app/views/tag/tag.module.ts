import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagFilterPipe } from './pipes/tag-filter.pipe';


@NgModule({
  declarations: [
    TagComponent,
    TagFilterPipe
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TagModule { }
