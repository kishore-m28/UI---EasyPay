import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRoundStatusComponent } from './tech-round-status.component';

describe('TechRoundStatusComponent', () => {
  let component: TechRoundStatusComponent;
  let fixture: ComponentFixture<TechRoundStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechRoundStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechRoundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
