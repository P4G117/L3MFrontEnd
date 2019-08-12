import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosSucursalBComponent } from './gastos-sucursal-b.component';

describe('GastosSucursalBComponent', () => {
  let component: GastosSucursalBComponent;
  let fixture: ComponentFixture<GastosSucursalBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosSucursalBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosSucursalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
