import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySmsComponent } from './money-sms.component';

describe('MoneySmsComponent', () => {
  let component: MoneySmsComponent;
  let fixture: ComponentFixture<MoneySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneySmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
