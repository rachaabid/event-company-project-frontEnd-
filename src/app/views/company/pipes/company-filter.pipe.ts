import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
  name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {

  transform(listCompanies: any[], searchCompany: string): any[] {
    if(!listCompanies || !searchCompany){
      return listCompanies;
    }
    return listCompanies.filter(company=>company.companyName?.toLowerCase().includes(searchCompany.toLowerCase()));
  }

}
