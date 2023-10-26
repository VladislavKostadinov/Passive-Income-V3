import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2hashComponent } from './f2hash.component';

describe('F2hashComponent', () => {
  let component: F2hashComponent;
  let fixture: ComponentFixture<F2hashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F2hashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F2hashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
