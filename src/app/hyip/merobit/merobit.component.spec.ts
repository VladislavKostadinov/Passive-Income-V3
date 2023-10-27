import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerobitComponent } from './merobit.component';

describe('MerobitComponent', () => {
  let component: MerobitComponent;
  let fixture: ComponentFixture<MerobitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerobitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerobitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
