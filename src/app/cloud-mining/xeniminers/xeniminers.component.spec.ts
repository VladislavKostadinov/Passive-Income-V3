import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeniminersComponent } from './xeniminers.component';

describe('XeniminersComponent', () => {
  let component: XeniminersComponent;
  let fixture: ComponentFixture<XeniminersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeniminersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XeniminersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
