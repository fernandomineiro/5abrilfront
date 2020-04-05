import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadpropriedadesComponent } from './cadpropriedades.component';

describe('CadpropriedadesComponent', () => {
  let component: CadpropriedadesComponent;
  let fixture: ComponentFixture<CadpropriedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadpropriedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadpropriedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
