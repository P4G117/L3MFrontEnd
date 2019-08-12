import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosSucursalAComponent } from './gastos-sucursal-a.component';

describe('GastosSucursalAComponent', () => {
  let component: GastosSucursalAComponent;
  let fixture: ComponentFixture<GastosSucursalAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosSucursalAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosSucursalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
