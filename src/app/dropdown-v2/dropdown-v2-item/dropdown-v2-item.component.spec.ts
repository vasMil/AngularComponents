import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownV2ItemComponent } from './dropdown-v2-item.component';

describe('DropdownV2ItemComponent', () => {
  let component: DropdownV2ItemComponent;
  let fixture: ComponentFixture<DropdownV2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownV2ItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownV2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
