import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMiningComponent } from './cloud-mining.component';

describe('CloudMiningComponent', () => {
  let component: CloudMiningComponent;
  let fixture: ComponentFixture<CloudMiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudMiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
