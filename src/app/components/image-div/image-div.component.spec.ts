import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDivComponent } from './image-div.component';

describe('ImageDivComponent', () => {
  let component: ImageDivComponent;
  let fixture: ComponentFixture<ImageDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDivComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDivComponent);
    component = fixture.componentInstance;
    // component.image_src = 'https://www.google.com'; // Provide a mock value
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
