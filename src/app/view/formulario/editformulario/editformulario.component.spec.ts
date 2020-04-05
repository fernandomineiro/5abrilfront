import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformularioComponent } from './editformulario.component';

describe('EditformularioComponent', () => {
  let component: EditformularioComponent;
  let fixture: ComponentFixture<EditformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
