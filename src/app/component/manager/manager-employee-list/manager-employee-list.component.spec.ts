import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEmployeeListComponent } from './manager-employee-list.component';

describe('ManagerEmployeeListComponent', () => {
  let component: ManagerEmployeeListComponent;
  let fixture: ComponentFixture<ManagerEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerEmployeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
