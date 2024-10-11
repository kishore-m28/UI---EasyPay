import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMainpageComponent } from './manager-mainpage.component';

describe('ManagerMainpageComponent', () => {
  let component: ManagerMainpageComponent;
  let fixture: ComponentFixture<ManagerMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerMainpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
