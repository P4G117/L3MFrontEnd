import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProductosComponent } from './anadir-productos.component';

describe('AnadirProductosComponent', () => {
  let component: AnadirProductosComponent;
  let fixture: ComponentFixture<AnadirProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
