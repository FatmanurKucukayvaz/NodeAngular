import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { KullaniciService } from '../../shared/kullanici.service'

@Component({
  selector: 'app-giris-yap',
  templateUrl: './giris-yap.component.html',
  styleUrls: ['./giris-yap.component.css']
})
export class GirisYapComponent implements OnInit {

  constructor(private kullaniciService: KullaniciService,private router : Router) { }

    model ={
    email :'',
    parola:''
  };

  ErrorMessages: string;

  ngOnInit() {
    if(this.kullaniciService.isLoggedIn())
    this.router.navigateByUrl('/kullaniciSayfasi');
  }

  onSubmit(form : NgForm){
    this.kullaniciService.login(form.value).subscribe(
      res => {
        this.kullaniciService.setToken(res['token']);
        this.router.navigateByUrl('/kullaniciSayfasi');
      },
      err => {
        this.ErrorMessages = err.error.message;
      }
    );
  }

}
