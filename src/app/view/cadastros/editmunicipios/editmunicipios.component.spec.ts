import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmunicipiosComponent } from './editmunicipios.component';

describe('EditmunicipiosComponent', () => {
  let component: EditmunicipiosComponent;
  let fixture: ComponentFixture<EditmunicipiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmunicipiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
