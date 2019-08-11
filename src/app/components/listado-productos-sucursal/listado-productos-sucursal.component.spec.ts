import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductosSucursalComponent } from './listado-productos-sucursal.component';

describe('ListadoProductosSucursalComponent', () => {
  let component: ListadoProductosSucursalComponent;
  let fixture: ComponentFixture<ListadoProductosSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoProductosSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProductosSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
