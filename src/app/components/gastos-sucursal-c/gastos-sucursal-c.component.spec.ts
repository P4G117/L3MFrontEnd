import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosSucursalCComponent } from './gastos-sucursal-c.component';

describe('GastosSucursalCComponent', () => {
  let component: GastosSucursalCComponent;
  let fixture: ComponentFixture<GastosSucursalCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosSucursalCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosSucursalCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
