import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { KullaniciService } from "../shared/kullanici.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private kullaniciService : KullaniciService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.kullaniciService.isLoggedIn()) {
        this.router.navigateByUrl('/giris');
        this.kullaniciService.deleteToken();
        return false;
      }
    return true;
  }
}
