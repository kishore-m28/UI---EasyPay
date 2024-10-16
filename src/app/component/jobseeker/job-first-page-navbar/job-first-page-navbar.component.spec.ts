import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFirstPageNavbarComponent } from './job-first-page-navbar.component';

describe('JobFirstPageNavbarComponent', () => {
  let component: JobFirstPageNavbarComponent;
  let fixture: ComponentFixture<JobFirstPageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobFirstPageNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFirstPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
