import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWorkComponent } from './assign-work.component';

describe('AssignWorkComponent', () => {
  let component: AssignWorkComponent;
  let fixture: ComponentFixture<AssignWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
