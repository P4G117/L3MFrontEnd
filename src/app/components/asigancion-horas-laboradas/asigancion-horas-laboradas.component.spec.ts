import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigancionHorasLaboradasComponent } from './asigancion-horas-laboradas.component';

describe('AsigancionHorasLaboradasComponent', () => {
  let component: AsigancionHorasLaboradasComponent;
  let fixture: ComponentFixture<AsigancionHorasLaboradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigancionHorasLaboradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigancionHorasLaboradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
