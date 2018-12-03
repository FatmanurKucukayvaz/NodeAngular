import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciSayfasiComponent } from './kullanici-sayfasi.component';

describe('KullaniciSayfasiComponent', () => {
  let component: KullaniciSayfasiComponent;
  let fixture: ComponentFixture<KullaniciSayfasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullaniciSayfasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
