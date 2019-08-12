import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalCComponent } from './sucursal-c.component';

describe('SucursalCComponent', () => {
  let component: SucursalCComponent;
  let fixture: ComponentFixture<SucursalCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
