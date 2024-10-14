import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRoundStatusComponent } from './hr-round-status.component';

describe('HrRoundStatusComponent', () => {
  let component: HrRoundStatusComponent;
  let fixture: ComponentFixture<HrRoundStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrRoundStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrRoundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
