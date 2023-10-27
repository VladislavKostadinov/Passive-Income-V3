import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitstarsinvComponent } from './bitstarsinv.component';

describe('BitstarsinvComponent', () => {
  let component: BitstarsinvComponent;
  let fixture: ComponentFixture<BitstarsinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitstarsinvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitstarsinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
