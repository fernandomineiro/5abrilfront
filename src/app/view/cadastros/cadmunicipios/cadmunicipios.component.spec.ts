import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadmunicipiosComponent } from './cadmunicipios.component';

describe('CadmunicipiosComponent', () => {
  let component: CadmunicipiosComponent;
  let fixture: ComponentFixture<CadmunicipiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadmunicipiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadmunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
