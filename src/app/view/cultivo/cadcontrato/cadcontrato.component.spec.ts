import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcontratoComponent } from './cadcontrato.component';

describe('CadcontratoComponent', () => {
  let component: CadcontratoComponent;
  let fixture: ComponentFixture<CadcontratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadcontratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadcontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
