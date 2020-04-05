import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadinformacaoComponent } from './cadinformacao.component';

describe('CadinformacaoComponent', () => {
  let component: CadinformacaoComponent;
  let fixture: ComponentFixture<CadinformacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadinformacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadinformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
