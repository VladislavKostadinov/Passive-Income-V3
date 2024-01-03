import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoflojdComponent } from './neoflojd.component';

describe('NeoflojdComponent', () => {
  let component: NeoflojdComponent;
  let fixture: ComponentFixture<NeoflojdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoflojdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoflojdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
