import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirSucursalComponent } from './anadir-sucursal.component';

describe('AnadirSucursalComponent', () => {
  let component: AnadirSucursalComponent;
  let fixture: ComponentFixture<AnadirSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
