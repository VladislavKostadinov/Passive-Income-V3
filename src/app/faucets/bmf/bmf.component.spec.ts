import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmfComponent } from './bmf.component';

describe('BmfComponent', () => {
  let component: BmfComponent;
  let fixture: ComponentFixture<BmfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
