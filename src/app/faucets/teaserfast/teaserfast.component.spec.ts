import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserfastComponent } from './teaserfast.component';

describe('TeaserfastComponent', () => {
  let component: TeaserfastComponent;
  let fixture: ComponentFixture<TeaserfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserfastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaserfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
