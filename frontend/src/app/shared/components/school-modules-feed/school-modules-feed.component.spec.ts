import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolModulesFeedComponent } from './school-modules-feed.component';

describe('SchoolModulesFeedComponent', () => {
  let component: SchoolModulesFeedComponent;
  let fixture: ComponentFixture<SchoolModulesFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolModulesFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolModulesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
