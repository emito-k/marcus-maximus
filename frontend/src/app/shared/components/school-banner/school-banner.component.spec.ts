import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBannerComponent } from './school-banner.component';

describe('SchoolBannerComponent', () => {
  let component: SchoolBannerComponent;
  let fixture: ComponentFixture<SchoolBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
