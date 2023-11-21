import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpayzComponent } from './wpayz.component';

describe('WpayzComponent', () => {
  let component: WpayzComponent;
  let fixture: ComponentFixture<WpayzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpayzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpayzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
