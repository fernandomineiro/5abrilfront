import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadperfilComponent } from './cadperfil.component';

describe('CadperfilComponent', () => {
  let component: CadperfilComponent;
  let fixture: ComponentFixture<CadperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
