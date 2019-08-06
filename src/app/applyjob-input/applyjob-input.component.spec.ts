import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyjobInputComponent } from './applyjob-input.component';

describe('ApplyjobInputComponent', () => {
  let component: ApplyjobInputComponent;
  let fixture: ComponentFixture<ApplyjobInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyjobInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyjobInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
