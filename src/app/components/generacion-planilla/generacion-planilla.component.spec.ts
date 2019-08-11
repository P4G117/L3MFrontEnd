import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionPlanillaComponent } from './generacion-planilla.component';

describe('GeneracionPlanillaComponent', () => {
  let component: GeneracionPlanillaComponent;
  let fixture: ComponentFixture<GeneracionPlanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneracionPlanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneracionPlanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
