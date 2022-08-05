import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CompanyFilterPipe} from './pipes/company-filter.pipe'



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFilterPipe
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
