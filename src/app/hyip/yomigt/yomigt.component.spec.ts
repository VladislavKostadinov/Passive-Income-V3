import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YomigtComponent } from './yomigt.component';

describe('YomigtComponent', () => {
  let component: YomigtComponent;
  let fixture: ComponentFixture<YomigtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YomigtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YomigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
