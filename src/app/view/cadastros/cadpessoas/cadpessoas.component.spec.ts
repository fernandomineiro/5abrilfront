import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadpessoasComponent } from './cadpessoas.component';

describe('CadpessoasComponent', () => {
  let component: CadpessoasComponent;
  let fixture: ComponentFixture<CadpessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadpessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadpessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
