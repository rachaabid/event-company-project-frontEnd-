import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyForm?: FormGroup;
  submitted = false;
  listCompanies: any;
  id: any;
  imageSrc: any;
  fileSelected: any;
  constructor(private companyService: CompanyService,
    private route: Router, private toastr: ToastrService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadCompanies();
    this.companyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      companyDescription: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl(''),
      photo: new FormControl('')
    })
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe(data => this.listCompanies = data);
  }

  showCompanyData(id: any) {
    this.id = id;
    console.log(id);
    this.companyService.getCompanyById(id).subscribe(data => {
      this.companyForm?.patchValue(data),
        this.toastr.info('here is your data', 'To modify')
    })
  }

  saveChanges() {
    this.submitted = true;
    if (this.companyForm?.invalid) {
      return
    }
    this.companyService.saveUpdate(this.id, this.companyForm?.value).subscribe(data => {
      location.reload(),
        this.toastr.info('Your data changed', 'Good'),
        (error: any) => {
          console.log(error)
        }
    })
  }

  selectImage(event: any) {
    this.fileSelected = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected);
    reader.onloadend = () => {
      const base64String = (<string>reader.result).replace("data:", "").replace(/^.+,/, "");
      this.companyForm?.controls['photo'].setValue("data:image/jpeg;base64," + base64String.toString())
    }
  }

  addCompany() {
    this.submitted = true;
    if (this.companyForm?.invalid) {
      return
    }
    const formdata = new FormData
    formdata.append('file', this.companyForm?.value, this.fileSelected);
    this.companyService.uploadImage(formdata);

    this.companyService.createCompany(this.companyForm?.value).subscribe(data => {
      console.log(data);
      this.toastr.success('Company created', 'Good'),
        location.reload()
    }, (error) => {
      console.log(error)
    }
    )

  }

  deleteCompany(i: any) {
    this.companyService.removeCompany(i).subscribe(data => {
      this.ngOnInit();
      this.toastr.info('data deleted', 'Company')
    })
  }

}






