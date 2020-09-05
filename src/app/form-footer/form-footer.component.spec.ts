import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFooterComponent } from './form-footer.component';

describe('FormFooterComponent', () => {
  let component: FormFooterComponent;
  let fixture: ComponentFixture<FormFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
