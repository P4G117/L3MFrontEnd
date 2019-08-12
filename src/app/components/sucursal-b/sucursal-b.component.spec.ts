import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalBComponent } from './sucursal-b.component';

describe('SucursalBComponent', () => {
  let component: SucursalBComponent;
  let fixture: ComponentFixture<SucursalBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
