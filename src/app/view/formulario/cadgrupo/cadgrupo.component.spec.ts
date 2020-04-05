import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadgrupoComponent } from './cadgrupo.component';

describe('CadgrupoComponent', () => {
  let component: CadgrupoComponent;
  let fixture: ComponentFixture<CadgrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadgrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
