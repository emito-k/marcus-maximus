import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolModuleCardComponent } from './school-module-card.component';

describe('SchoolModuleCardComponent', () => {
  let component: SchoolModuleCardComponent;
  let fixture: ComponentFixture<SchoolModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolModuleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
