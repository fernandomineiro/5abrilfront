import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinformacaoComponent } from './editinformacao.component';

describe('EditinformacaoComponent', () => {
  let component: EditinformacaoComponent;
  let fixture: ComponentFixture<EditinformacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinformacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
