import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSettingsPageComponent } from './school-settings-page.component';

describe('SchoolSettingsPageComponent', () => {
  let component: SchoolSettingsPageComponent;
  let fixture: ComponentFixture<SchoolSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolSettingsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
