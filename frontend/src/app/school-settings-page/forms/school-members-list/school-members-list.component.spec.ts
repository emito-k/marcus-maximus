import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMembersListComponent } from './school-members-list.component';

describe('SchoolMembersListComponent', () => {
  let component: SchoolMembersListComponent;
  let fixture: ComponentFixture<SchoolMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolMembersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
