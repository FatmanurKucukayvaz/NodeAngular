import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Kullanici } from './kullanici.model';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  selectedUser: Kullanici = {
    isim: '',
    email: '',
    tel: '',
    parola: ''
  };
  kullanicilar: Kullanici[];

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  postUser(kullanici: Kullanici){
    return this.http.post(environment.apiUrl+'/kaydol',kullanici,this.noAuthHeader);
  }

  getUser(){
    return this.http.get(environment.apiUrl+'/listele');
  }

  login(authCredentials) {
    return this.http.post(environment.apiUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

   getUserProfile() {
    return this.http.get(environment.apiUrl + '/kullaniciSayfasi');
  }
  

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}