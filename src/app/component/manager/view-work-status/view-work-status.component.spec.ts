import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkStatusComponent } from './view-work-status.component';

describe('ViewWorkStatusComponent', () => {
  let component: ViewWorkStatusComponent;
  let fixture: ComponentFixture<ViewWorkStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWorkStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
