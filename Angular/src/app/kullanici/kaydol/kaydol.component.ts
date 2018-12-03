import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { KullaniciService } from '../../shared/kullanici.service'


@Component({
  selector: 'app-kaydol',
  templateUrl: './kaydol.component.html',
  styleUrls: ['./kaydol.component.css'],
  providers: [KullaniciService]
})
export class KaydolComponent implements OnInit {

  SucessMessage: boolean;
  ErrorMessages: string;

  constructor(private kullaniciService: KullaniciService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.kullaniciService.postUser(form.value).subscribe(
      res => {
        this.SucessMessage = true;
        setTimeout(() => this.SucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.ErrorMessages = err.error.join('<br/>');
        }
        else
          this.ErrorMessages = 'Bir sorun oluştu.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.kullaniciService.selectedUser = {
      isim: '',
      email: '',
      tel: '',
      parola: ''
    };
    form.resetForm();
    this.ErrorMessages = '';
  }

}
