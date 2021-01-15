import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenOwnerAddMenuComponent } from './canteen-owner-add-menu.component';

describe('CanteenOwnerAddMenuComponent', () => {
  let component: CanteenOwnerAddMenuComponent;
  let fixture: ComponentFixture<CanteenOwnerAddMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenOwnerAddMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenOwnerAddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
