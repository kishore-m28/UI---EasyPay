import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProjListComponent } from './emp-proj-list.component';

describe('EmpProjListComponent', () => {
  let component: EmpProjListComponent;
  let fixture: ComponentFixture<EmpProjListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpProjListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpProjListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
