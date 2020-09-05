import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTableComponent } from './search-result-table.component';

describe('SearchResultTableComponent', () => {
  let component: SearchResultTableComponent;
  let fixture: ComponentFixture<SearchResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
