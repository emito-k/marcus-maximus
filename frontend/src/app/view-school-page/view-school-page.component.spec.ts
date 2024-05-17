import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolPageComponent } from './view-school-page.component';

describe('ViewSchoolPageComponent', () => {
  let component: ViewSchoolPageComponent;
  let fixture: ComponentFixture<ViewSchoolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSchoolPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSchoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
