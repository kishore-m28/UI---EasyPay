import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTechInterviewComponent } from './schedule-tech-interview.component';

describe('ScheduleTechInterviewComponent', () => {
  let component: ScheduleTechInterviewComponent;
  let fixture: ComponentFixture<ScheduleTechInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleTechInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleTechInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
