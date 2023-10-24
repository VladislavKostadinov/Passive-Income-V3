import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagbucksComponent } from './swagbucks.component';

describe('SwagbucksComponent', () => {
  let component: SwagbucksComponent;
  let fixture: ComponentFixture<SwagbucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwagbucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwagbucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
