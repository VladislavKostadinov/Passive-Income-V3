import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tron1477Component } from './tron1477.component';

describe('Tron1477Component', () => {
  let component: Tron1477Component;
  let fixture: ComponentFixture<Tron1477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tron1477Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tron1477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
