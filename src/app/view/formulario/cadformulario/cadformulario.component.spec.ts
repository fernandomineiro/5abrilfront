import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadformularioComponent } from './cadformulario.component';

describe('CadformularioComponent', () => {
  let component: CadformularioComponent;
  let fixture: ComponentFixture<CadformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
