import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioShortComponent } from './portfolio-short.component';

describe('PortfolioShortComponent', () => {
  let component: PortfolioShortComponent;
  let fixture: ComponentFixture<PortfolioShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioShortComponent]
    });
    fixture = TestBed.createComponent(PortfolioShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
