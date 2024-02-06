import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosenaComponent } from './losena.component';

describe('LosenaComponent', () => {
  let component: LosenaComponent;
  let fixture: ComponentFixture<LosenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LosenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
