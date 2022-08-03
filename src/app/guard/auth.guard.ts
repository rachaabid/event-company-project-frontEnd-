import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) { }
   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = localStorage.getItem('token');

      if (token !== null) {
       let isExpired: any = this.isExpiredToken(token);
        if (isExpired) {
          return true
        }
        else {
          this.route.navigate(['/login'])
          alert('your token expired')
          return false
        }
       }
       else {
         this.route.navigate(['/login'])
         return false
       }
    
     }
     isExpiredToken(token: string): boolean{
       
      //  let decodedToken: any = jwt_decode(token);
      //  const expireDate = new Date();
      //  expireDate.setUTCDate(decodedToken.exp);
      const expireDate = (JSON.parse(atob(token.split('.')[1]))).exp;
       console.log(expireDate.valueOf())
       const curentDate = Math.floor(Date.now()/1000);
       console.log(curentDate.valueOf())
       return expireDate>curentDate
     }
}




