import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitDashboardComponent } from './recruit-dashboard.component';

describe('RecruitDashboardComponent', () => {
  let component: RecruitDashboardComponent;
  let fixture: ComponentFixture<RecruitDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
