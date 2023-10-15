import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaucetsComponent } from './faucets.component';

describe('FaucetsComponent', () => {
  let component: FaucetsComponent;
  let fixture: ComponentFixture<FaucetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaucetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaucetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
