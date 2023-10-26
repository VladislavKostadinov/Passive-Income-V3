import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftfermaComponent } from './nftferma.component';

describe('NftfermaComponent', () => {
  let component: NftfermaComponent;
  let fixture: ComponentFixture<NftfermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftfermaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftfermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
