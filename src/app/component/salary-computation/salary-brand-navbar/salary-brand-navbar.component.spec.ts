import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBrandNavbarComponent } from './salary-brand-navbar.component';

describe('SalaryBrandNavbarComponent', () => {
  let component: SalaryBrandNavbarComponent;
  let fixture: ComponentFixture<SalaryBrandNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryBrandNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryBrandNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
