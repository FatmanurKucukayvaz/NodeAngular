import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisYapComponent } from './giris-yap.component';

describe('GirisYapComponent', () => {
  let component: GirisYapComponent;
  let fixture: ComponentFixture<GirisYapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisYapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisYapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
