import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadfiliaisComponent } from './cadfiliais.component';

describe('CadfiliaisComponent', () => {
  let component: CadfiliaisComponent;
  let fixture: ComponentFixture<CadfiliaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadfiliaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadfiliaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
