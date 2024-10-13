import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmpFormComponent } from './assign-emp-form.component';

describe('AssignEmpFormComponent', () => {
  let component: AssignEmpFormComponent;
  let fixture: ComponentFixture<AssignEmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEmpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
