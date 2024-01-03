import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtccloudComponent } from './etccloud.component';

describe('EtccloudComponent', () => {
  let component: EtccloudComponent;
  let fixture: ComponentFixture<EtccloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtccloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtccloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
