import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerIssueReplyComponent } from './manager-issue-reply.component';

describe('ManagerIssueReplyComponent', () => {
  let component: ManagerIssueReplyComponent;
  let fixture: ComponentFixture<ManagerIssueReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerIssueReplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerIssueReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
