import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDivComponent } from './filter-div.component';

describe('FilterDivComponent', () => {
  let component: FilterDivComponent;
  let fixture: ComponentFixture<FilterDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
