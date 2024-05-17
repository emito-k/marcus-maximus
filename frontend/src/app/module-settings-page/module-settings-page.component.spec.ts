import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSettingsPageComponent } from './module-settings-page.component';

describe('ModuleSettingsPageComponent', () => {
  let component: ModuleSettingsPageComponent;
  let fixture: ComponentFixture<ModuleSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleSettingsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
