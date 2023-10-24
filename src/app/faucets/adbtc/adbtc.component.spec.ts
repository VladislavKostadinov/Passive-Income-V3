import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdbtcComponent } from './adbtc.component';

describe('AdbtcComponent', () => {
  let component: AdbtcComponent;
  let fixture: ComponentFixture<AdbtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdbtcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdbtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
