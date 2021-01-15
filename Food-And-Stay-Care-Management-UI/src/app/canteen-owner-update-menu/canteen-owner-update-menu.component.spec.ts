import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenOwnerUpdateMenuComponent } from './canteen-owner-update-menu.component';

describe('CanteenOwnerUpdateMenuComponent', () => {
  let component: CanteenOwnerUpdateMenuComponent;
  let fixture: ComponentFixture<CanteenOwnerUpdateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenOwnerUpdateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenOwnerUpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
