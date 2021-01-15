import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenOwnerHomeComponent } from './canteen-owner-home.component';

describe('CanteenOwnerHomeComponent', () => {
  let component: CanteenOwnerHomeComponent;
  let fixture: ComponentFixture<CanteenOwnerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenOwnerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenOwnerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
