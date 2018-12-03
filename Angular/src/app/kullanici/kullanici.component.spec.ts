import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciComponent } from './kullanici.component';

describe('KullaniciComponent', () => {
  let component: KullaniciComponent;
  let fixture: ComponentFixture<KullaniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullaniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
