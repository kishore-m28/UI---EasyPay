import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallComplianceComponent } from './overall-compliance.component';

describe('OverallComplianceComponent', () => {
  let component: OverallComplianceComponent;
  let fixture: ComponentFixture<OverallComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallComplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
