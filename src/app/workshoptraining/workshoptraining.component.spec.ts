import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoptrainingComponent } from './workshoptraining.component';

describe('WorkshoptrainingComponent', () => {
  let component: WorkshoptrainingComponent;
  let fixture: ComponentFixture<WorkshoptrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshoptrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshoptrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
