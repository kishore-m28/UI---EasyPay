import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePostComponent } from './attendance-post.component';

describe('AttendancePostComponent', () => {
  let component: AttendancePostComponent;
  let fixture: ComponentFixture<AttendancePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendancePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendancePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
