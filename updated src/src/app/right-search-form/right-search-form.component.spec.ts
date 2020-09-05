import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSearchFormComponent } from './right-search-form.component';

describe('RightSearchFormComponent', () => {
  let component: RightSearchFormComponent;
  let fixture: ComponentFixture<RightSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
