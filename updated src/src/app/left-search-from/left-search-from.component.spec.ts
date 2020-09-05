import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSearchFromComponent } from './left-search-from.component';

describe('LeftSearchFromComponent', () => {
  let component: LeftSearchFromComponent;
  let fixture: ComponentFixture<LeftSearchFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSearchFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSearchFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
