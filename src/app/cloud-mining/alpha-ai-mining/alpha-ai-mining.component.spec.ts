import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaAiMiningComponent } from './alpha-ai-mining.component';

describe('AlphaAiMiningComponent', () => {
  let component: AlphaAiMiningComponent;
  let fixture: ComponentFixture<AlphaAiMiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaAiMiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaAiMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
