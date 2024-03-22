import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestYoutubeComponent } from './latest-youtube.component';

describe('LatesYoutubeComponent', () => {
  let component: LatestYoutubeComponent;
  let fixture: ComponentFixture<LatestYoutubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestYoutubeComponent]
    });
    fixture = TestBed.createComponent(LatestYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
