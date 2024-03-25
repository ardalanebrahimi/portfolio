import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBlogsComponent } from './highlight-blogs.component';

describe('HighlightBlogsComponent', () => {
  let component: HighlightBlogsComponent;
  let fixture: ComponentFixture<HighlightBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightBlogsComponent]
    });
    fixture = TestBed.createComponent(HighlightBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
