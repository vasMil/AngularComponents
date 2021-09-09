import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeprecatedViewComponent } from './deprecated-view.component';

describe('DeprecatedViewComponent', () => {
  let component: DeprecatedViewComponent;
  let fixture: ComponentFixture<DeprecatedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeprecatedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeprecatedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
