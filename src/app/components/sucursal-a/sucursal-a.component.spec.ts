import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalAComponent } from './sucursal-a.component';

describe('SucursalAComponent', () => {
  let component: SucursalAComponent;
  let fixture: ComponentFixture<SucursalAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
