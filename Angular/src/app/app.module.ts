import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { KaydolComponent } from './kullanici/kaydol/kaydol.component';
import { appRoutes } from './routes';
import { KullaniciSayfasiComponent } from './kullanici/kullanici-sayfasi/kullanici-sayfasi.component';
import { KullaniciListComponent } from './kullanici/kullanici-list/kullanici-list.component';

import { GirisYapComponent } from './kullanici/giris-yap/giris-yap.component';
import { KullaniciService } from './shared/kullanici.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    KullaniciComponent,
    KaydolComponent,
    KullaniciListComponent,
    GirisYapComponent,
    KullaniciSayfasiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,KullaniciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
