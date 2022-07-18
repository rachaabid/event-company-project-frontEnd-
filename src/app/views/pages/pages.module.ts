import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './resetForgetPassword/forget-password/forget-password.component';
import { ResetPasswordComponent } from './resetForgetPassword/reset-password/reset-password.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { UpdateEventComponent } from './Event/update-event/update-event.component';
import { ListEventComponent } from './Event/list-event/list-event.component';
import { AddTagComponent } from './Tag/add-tag/add-tag.component';
import { ListTagComponent } from './Tag/list-tag/list-tag.component';
import { UpdateTagComponent } from './Tag/update-tag/update-tag.component';
import { VerifyEmailComponent } from './verifyEmail/verify-email/verify-email.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CompanyComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    UpdateCompanyComponent,
    AddEventComponent,
    UpdateEventComponent,
    ListEventComponent,
    AddTagComponent,
    ListTagComponent,
    UpdateTagComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule {
}
