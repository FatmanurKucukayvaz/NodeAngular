import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaydolComponent } from './kaydol.component';

describe('KaydolComponent', () => {
  let component: KaydolComponent;
  let fixture: ComponentFixture<KaydolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaydolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaydolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
