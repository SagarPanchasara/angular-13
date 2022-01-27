import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePage1Component } from './sample-page1.component';

describe('SamplePage1Component', () => {
  let component: SamplePage1Component;
  let fixture: ComponentFixture<SamplePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
