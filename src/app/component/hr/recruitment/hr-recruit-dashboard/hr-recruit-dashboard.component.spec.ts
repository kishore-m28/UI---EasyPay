import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRecruitDashboardComponent } from './hr-recruit-dashboard.component';

describe('HrRecruitDashboardComponent', () => {
  let component: HrRecruitDashboardComponent;
  let fixture: ComponentFixture<HrRecruitDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrRecruitDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrRecruitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
