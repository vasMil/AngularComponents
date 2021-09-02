import { TestBed } from '@angular/core/testing';

import { DropdownMessagePassingService } from './dropdown-message-passing.service';

describe('DropdownMessagePassingService', () => {
  let service: DropdownMessagePassingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownMessagePassingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
