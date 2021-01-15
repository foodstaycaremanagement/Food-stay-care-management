import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenOwnerDeleteMenuComponent } from './canteen-owner-delete-menu.component';

describe('CanteenOwnerDeleteMenuComponent', () => {
  let component: CanteenOwnerDeleteMenuComponent;
  let fixture: ComponentFixture<CanteenOwnerDeleteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenOwnerDeleteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenOwnerDeleteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
