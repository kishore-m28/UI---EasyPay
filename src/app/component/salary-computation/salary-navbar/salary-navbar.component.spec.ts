import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryNavbarComponent } from './salary-navbar.component';

describe('SalaryNavbarComponent', () => {
  let component: SalaryNavbarComponent;
  let fixture: ComponentFixture<SalaryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
