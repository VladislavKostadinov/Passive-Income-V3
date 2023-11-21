import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelbtcComponent } from './camelbtc.component';

describe('CamelbtcComponent', () => {
  let component: CamelbtcComponent;
  let fixture: ComponentFixture<CamelbtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamelbtcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamelbtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
