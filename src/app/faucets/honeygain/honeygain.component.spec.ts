import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneygainComponent } from './honeygain.component';

describe('HoneygainComponent', () => {
  let component: HoneygainComponent;
  let fixture: ComponentFixture<HoneygainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneygainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneygainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
