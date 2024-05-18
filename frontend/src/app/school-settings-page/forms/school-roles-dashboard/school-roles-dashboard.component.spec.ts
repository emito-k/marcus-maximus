import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRolesDashboardComponent } from './school-roles-dashboard.component';

describe('SchoolRolesDashboardComponent', () => {
  let component: SchoolRolesDashboardComponent;
  let fixture: ComponentFixture<SchoolRolesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRolesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRolesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
