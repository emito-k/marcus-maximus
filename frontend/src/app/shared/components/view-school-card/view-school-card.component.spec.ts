import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolCardComponent } from './view-school-card.component';

describe('ViewSchoolCardComponent', () => {
  let component: ViewSchoolCardComponent;
  let fixture: ComponentFixture<ViewSchoolCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSchoolCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSchoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
