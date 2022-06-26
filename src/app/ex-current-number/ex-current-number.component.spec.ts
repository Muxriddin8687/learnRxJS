import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCurrentNumberComponent } from './ex-current-number.component';

describe('ExCurrentNumberComponent', () => {
  let component: ExCurrentNumberComponent;
  let fixture: ComponentFixture<ExCurrentNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExCurrentNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCurrentNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
