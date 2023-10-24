import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireFaucetComponent } from './fire-faucet.component';

describe('FireFaucetComponent', () => {
  let component: FireFaucetComponent;
  let fixture: ComponentFixture<FireFaucetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireFaucetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireFaucetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
