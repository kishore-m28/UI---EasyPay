import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHrInterviewComponent } from './schedule-hr-interview.component';

describe('ScheduleHrInterviewComponent', () => {
  let component: ScheduleHrInterviewComponent;
  let fixture: ComponentFixture<ScheduleHrInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleHrInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleHrInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
