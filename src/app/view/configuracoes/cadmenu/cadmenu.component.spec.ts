import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadmenuComponent } from './cadmenu.component';

describe('CadmenuComponent', () => {
  let component: CadmenuComponent;
  let fixture: ComponentFixture<CadmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
