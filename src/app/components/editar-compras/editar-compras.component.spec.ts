import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComprasComponent } from './editar-compras.component';

describe('EditarComprasComponent', () => {
  let component: EditarComprasComponent;
  let fixture: ComponentFixture<EditarComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
