import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionHorasComponent } from './asignacion-horas.component';

describe('AsignacionHorasComponent', () => {
  let component: AsignacionHorasComponent;
  let fixture: ComponentFixture<AsignacionHorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionHorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
