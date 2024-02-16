import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegitDogeMiningComponent } from './legit-doge-mining.component';

describe('LegitDogeMiningComponent', () => {
  let component: LegitDogeMiningComponent;
  let fixture: ComponentFixture<LegitDogeMiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegitDogeMiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegitDogeMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
