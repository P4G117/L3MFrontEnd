import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirRolComponent } from './anadir-rol.component';

describe('AnadirRolComponent', () => {
  let component: AnadirRolComponent;
  let fixture: ComponentFixture<AnadirRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
