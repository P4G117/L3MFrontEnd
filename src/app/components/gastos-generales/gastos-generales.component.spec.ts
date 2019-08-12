import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosGeneralesComponent } from './gastos-generales.component';

describe('GastosGeneralesComponent', () => {
  let component: GastosGeneralesComponent;
  let fixture: ComponentFixture<GastosGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
