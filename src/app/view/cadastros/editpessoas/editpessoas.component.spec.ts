import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpessoasComponent } from './editpessoas.component';

describe('EditpessoasComponent', () => {
  let component: EditpessoasComponent;
  let fixture: ComponentFixture<EditpessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
