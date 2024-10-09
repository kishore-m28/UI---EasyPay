import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRecruitNavbarComponent } from './hr-recruit-navbar.component';

describe('HrRecruitNavbarComponent', () => {
  let component: HrRecruitNavbarComponent;
  let fixture: ComponentFixture<HrRecruitNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrRecruitNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrRecruitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
