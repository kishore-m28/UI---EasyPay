import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerIssueListComponent } from './manager-issue-list.component';

describe('ManagerIssueListComponent', () => {
  let component: ManagerIssueListComponent;
  let fixture: ComponentFixture<ManagerIssueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerIssueListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
