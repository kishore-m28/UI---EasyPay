import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrScoresheetComponent } from './hr-scoresheet.component';

describe('HrScoresheetComponent', () => {
  let component: HrScoresheetComponent;
  let fixture: ComponentFixture<HrScoresheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrScoresheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrScoresheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
