import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePostComponent } from './issue-post.component';

describe('IssuePostComponent', () => {
  let component: IssuePostComponent;
  let fixture: ComponentFixture<IssuePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
