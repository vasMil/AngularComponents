import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownV2MenuComponent } from './dropdown-v2-menu.component';

describe('DropdownV2MenuComponent', () => {
  let component: DropdownV2MenuComponent;
  let fixture: ComponentFixture<DropdownV2MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownV2MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownV2MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
