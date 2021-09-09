import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentViewComponent } from './current-view.component';

describe('CustomViewComponent', () => {
  let component: CurrentViewComponent;
  let fixture: ComponentFixture<CurrentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
