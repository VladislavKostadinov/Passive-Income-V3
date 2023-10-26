import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormgainComponent } from './stormgain.component';

describe('StormgainComponent', () => {
  let component: StormgainComponent;
  let fixture: ComponentFixture<StormgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StormgainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
