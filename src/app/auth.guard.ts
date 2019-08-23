import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user :SocialUser;
   constructor(private authService: AuthService, private router : Router) { }
   canActivate(): boolean {
   this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
   if(!this.user){
       this.router.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }
  }
  
}
