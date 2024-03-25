import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewComponent } from './blog-preview.component';

describe('BlogPreviewComponent', () => {
  let component: BlogPreviewComponent;
  let fixture: ComponentFixture<BlogPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPreviewComponent]
    });
    fixture = TestBed.createComponent(BlogPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
