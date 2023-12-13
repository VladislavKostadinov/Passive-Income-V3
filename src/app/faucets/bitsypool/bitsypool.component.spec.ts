import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsypoolComponent } from './bitsypool.component';

describe('BitsypoolComponent', () => {
  let component: BitsypoolComponent;
  let fixture: ComponentFixture<BitsypoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitsypoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitsypoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
