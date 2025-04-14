import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAreaComponent } from './images-area.component';
import { FilterDivComponent } from '../filter-div/filter-div.component';
import { ImageDivComponent } from '../image-div/image-div.component';

describe('ImagesAreaComponent', () => {
  let component: ImagesAreaComponent;
  let fixture: ComponentFixture<ImagesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesAreaComponent, FilterDivComponent, ImageDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
