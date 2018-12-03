import { Routes } from '@angular/router';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { KaydolComponent } from './kullanici/kaydol/kaydol.component';
import { KullaniciListComponent } from './kullanici/kullanici-list/kullanici-list.component';
import { GirisYapComponent } from './kullanici/giris-yap/giris-yap.component';
import { KullaniciSayfasiComponent } from './kullanici/kullanici-sayfasi/kullanici-sayfasi.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {

        path: 'kaydol', component: KullaniciComponent,
        children: [{ path: '', component: KaydolComponent }]
    },
    {
        path: 'giris', component: KullaniciComponent,
        children: [{ path: '', component: GirisYapComponent }]
    },
    {
        path: 'kullaniciListesi', component: KullaniciListComponent,

    },
    {
        path: 'kullaniciSayfasi', component: KullaniciSayfasiComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/giris', pathMatch: 'full'
    }
];