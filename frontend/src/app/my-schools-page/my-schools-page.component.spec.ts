import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySchoolsPageComponent } from './my-schools-page.component';

describe('MySchoolsPageComponent', () => {
  let component: MySchoolsPageComponent;
  let fixture: ComponentFixture<MySchoolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySchoolsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySchoolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
