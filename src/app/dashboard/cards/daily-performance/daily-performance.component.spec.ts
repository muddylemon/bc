import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPerformanceComponent } from './daily-performance.component';

describe('DailyPerformanceComponent', () => {
  let component: DailyPerformanceComponent;
  let fixture: ComponentFixture<DailyPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
