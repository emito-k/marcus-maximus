import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModulesPageComponent } from './my-modules-page.component';

describe('MyModulesPageComponent', () => {
  let component: MyModulesPageComponent;
  let fixture: ComponentFixture<MyModulesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyModulesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyModulesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
