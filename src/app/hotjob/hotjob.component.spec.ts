import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotjobComponent } from './hotjob.component';

describe('HotjobComponent', () => {
  let component: HotjobComponent;
  let fixture: ComponentFixture<HotjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
