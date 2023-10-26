import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinelabComponent } from './minelab.component';

describe('MinelabComponent', () => {
  let component: MinelabComponent;
  let fixture: ComponentFixture<MinelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinelabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
