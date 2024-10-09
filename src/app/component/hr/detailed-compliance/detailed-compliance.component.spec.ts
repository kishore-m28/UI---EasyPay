import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedComplianceComponent } from './detailed-compliance.component';

describe('DetailedComplianceComponent', () => {
  let component: DetailedComplianceComponent;
  let fixture: ComponentFixture<DetailedComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedComplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
