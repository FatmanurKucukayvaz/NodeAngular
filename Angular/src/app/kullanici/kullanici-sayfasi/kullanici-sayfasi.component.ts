import { Component, OnInit } from '@angular/core';
import { KullaniciService } from '../../shared/kullanici.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-kullanici-sayfasi',
  templateUrl: './kullanici-sayfasi.component.html',
  styleUrls: ['./kullanici-sayfasi.component.css']
})
export class KullaniciSayfasiComponent implements OnInit {
  
  userDetails;

  constructor(private kullaniciService: KullaniciService, private router: Router) { }

  ngOnInit() {
    this.kullaniciService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  cikis(){
    this.kullaniciService.deleteToken();
    this.router.navigate(['/giris']);
  }

}
