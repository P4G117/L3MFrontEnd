import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProveedoresComponent } from './gestion-proveedores.component';

describe('GestionProveedoresComponent', () => {
  let component: GestionProveedoresComponent;
  let fixture: ComponentFixture<GestionProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
