import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitNavbarComponent } from './recruit-navbar.component';

describe('RecruitNavbarComponent', () => {
  let component: RecruitNavbarComponent;
  let fixture: ComponentFixture<RecruitNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
