import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedListComponent } from './completed-list.component';

describe('CompletedListComponent', () => {
  let component: CompletedListComponent;
  let fixture: ComponentFixture<CompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
