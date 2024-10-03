import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrBrandNavbarComponent } from './hr-brand-navbar.component';

describe('HrBrandNavbarComponent', () => {
  let component: HrBrandNavbarComponent;
  let fixture: ComponentFixture<HrBrandNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrBrandNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrBrandNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
