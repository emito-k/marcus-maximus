import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModuleFormModalComponent } from './create-module-form-modal.component';

describe('CreateModuleFormModalComponent', () => {
  let component: CreateModuleFormModalComponent;
  let fixture: ComponentFixture<CreateModuleFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModuleFormModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateModuleFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
