import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTrabajadoresComponent } from './anadir-trabajadores.component';

describe('AnadirTrabajadoresComponent', () => {
  let component: AnadirTrabajadoresComponent;
  let fixture: ComponentFixture<AnadirTrabajadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirTrabajadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
