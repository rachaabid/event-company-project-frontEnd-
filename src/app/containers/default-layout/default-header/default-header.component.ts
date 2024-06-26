import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { ToastrService } from 'ngx-toastr';

import { CompanyService } from 'src/app/views/company/services/company.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private router: Router, private companyService: CompanyService, private toastr: ToastrService) {
    super();
  }

  onLogout() {
    this.companyService.logOut().subscribe(response => {
      location.reload();
      this.toastr.info('Disconnected', 'Status')
    });
  }
}
