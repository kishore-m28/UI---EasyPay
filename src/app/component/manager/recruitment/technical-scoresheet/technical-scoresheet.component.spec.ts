import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalScoresheetComponent } from './technical-scoresheet.component';

describe('TechnicalScoresheetComponent', () => {
  let component: TechnicalScoresheetComponent;
  let fixture: ComponentFixture<TechnicalScoresheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalScoresheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalScoresheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
