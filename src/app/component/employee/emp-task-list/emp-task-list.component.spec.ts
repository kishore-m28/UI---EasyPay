import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTaskListComponent } from './emp-task-list.component';

describe('EmpTaskListComponent', () => {
  let component: EmpTaskListComponent;
  let fixture: ComponentFixture<EmpTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTaskListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
