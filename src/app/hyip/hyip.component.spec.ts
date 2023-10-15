import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyipComponent } from './hyip.component';

describe('HyipComponent', () => {
  let component: HyipComponent;
  let fixture: ComponentFixture<HyipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HyipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
