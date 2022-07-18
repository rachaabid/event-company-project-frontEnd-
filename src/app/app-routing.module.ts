import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ForgetPasswordComponent } from './views/pages/resetForgetPassword/forget-password/forget-password.component';
import { ResetPasswordComponent } from './views/pages/resetForgetPassword/reset-password/reset-password.component';
import { AddCompanyComponent } from './views/pages/company/add-company/add-company.component';
import { UpdateCompanyComponent } from './views/pages/company/update-company/update-company.component';
import { ListCompanyComponent } from './views/pages/company/list-company/list-company.component';
import { AddEventComponent } from './views/pages/Event/add-event/add-event.component';
import { ListEventComponent } from './views/pages/Event/list-event/list-event.component';
import { UpdateEventComponent } from './views/pages/Event/update-event/update-event.component';
import { AddTagComponent } from './views/pages/Tag/add-tag/add-tag.component';
import { UpdateTagComponent } from './views/pages/Tag/update-tag/update-tag.component';
import { ListTagComponent } from './views/pages/Tag/list-tag/list-tag.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forget', component: ForgetPasswordComponent
  },
  {
    path: 'reset', component: ResetPasswordComponent
  },
  {
   path: 'AddCompany', component: AddCompanyComponent
  },
  {
   path: 'UpdateCompany/:id', component: UpdateCompanyComponent
  },
  {
   path: 'ListCompany', component: ListCompanyComponent
  },
  {
    path: 'AddEvent', component: AddEventComponent
   },
   {
    path: 'UpdateEvent/:id', component: UpdateEventComponent
   },
   {
    path: 'ListEvent', component: ListEventComponent
   },
   {
    path: 'AddTag', component: AddTagComponent
   },
   {
    path: 'UpdateTag/:id', component: UpdateTagComponent
   },
   {
    path: 'ListTag', component: ListTagComponent
   },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
