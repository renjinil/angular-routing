import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentjobsComponent } from './recentjobs.component';

describe('RecentjobsComponent', () => {
  let component: RecentjobsComponent;
  let fixture: ComponentFixture<RecentjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
