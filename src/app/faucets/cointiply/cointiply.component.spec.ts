import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CointiplyComponent } from './cointiply.component';

describe('CointiplyComponent', () => {
  let component: CointiplyComponent;
  let fixture: ComponentFixture<CointiplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CointiplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CointiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
