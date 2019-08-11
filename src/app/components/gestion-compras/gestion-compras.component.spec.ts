import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComprasComponent } from './gestion-compras.component';

describe('GestionComprasComponent', () => {
  let component: GestionComprasComponent;
  let fixture: ComponentFixture<GestionComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
