import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfiliaisComponent } from './editfiliais.component';

describe('EditfiliaisComponent', () => {
  let component: EditfiliaisComponent;
  let fixture: ComponentFixture<EditfiliaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfiliaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfiliaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
