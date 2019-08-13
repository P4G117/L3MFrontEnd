import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirComprasComponent } from './anadir-compras.component';

describe('AnadirComprasComponent', () => {
  let component: AnadirComprasComponent;
  let fixture: ComponentFixture<AnadirComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
