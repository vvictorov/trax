import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobSliderComponent } from './knob-slider.component';

describe('KnobSliderComponent', () => {
  let component: KnobSliderComponent;
  let fixture: ComponentFixture<KnobSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnobSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnobSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
