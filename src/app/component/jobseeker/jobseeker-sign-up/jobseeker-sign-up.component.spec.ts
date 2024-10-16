import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerSignUpComponent } from './jobseeker-sign-up.component';

describe('JobseekerSignUpComponent', () => {
  let component: JobseekerSignUpComponent;
  let fixture: ComponentFixture<JobseekerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
