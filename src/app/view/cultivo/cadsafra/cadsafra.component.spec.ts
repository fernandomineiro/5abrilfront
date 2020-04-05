import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadsafraComponent } from './cadsafra.component';

describe('CadsafraComponent', () => {
  let component: CadsafraComponent;
  let fixture: ComponentFixture<CadsafraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadsafraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadsafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
