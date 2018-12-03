import { Component, OnInit } from '@angular/core';
import { Kullanici } from '../../shared/kullanici.model';

import { KullaniciService } from '../../shared/kullanici.service'

@Component({
  selector: 'app-kullanici-list',
  templateUrl: './kullanici-list.component.html',
  styleUrls: ['./kullanici-list.component.css'],
  providers: [KullaniciService]
})
export class KullaniciListComponent implements OnInit {

  SucessMessage: boolean;
  ErrorMessages: string;

  constructor(private kullaniciService: KullaniciService) { }

  ngOnInit() {
  	this.getUsersList();
  }

  getUsersList(){
  	this.kullaniciService.getUser().subscribe((res) => {
      	this.kullaniciService.kullanicilar = res as Kullanici[];
      });
  }

}
