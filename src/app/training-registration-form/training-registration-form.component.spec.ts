import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRegistrationFormComponent } from './training-registration-form.component';

describe('TrainingRegistrationFormComponent', () => {
  let component: TrainingRegistrationFormComponent;
  let fixture: ComponentFixture<TrainingRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
