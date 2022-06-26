import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ndWeekRxJSComponent } from './ex1nd-week-rx-js.component';

describe('Ex1ndWeekRxJSComponent', () => {
  let component: Ex1ndWeekRxJSComponent;
  let fixture: ComponentFixture<Ex1ndWeekRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1ndWeekRxJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1ndWeekRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
