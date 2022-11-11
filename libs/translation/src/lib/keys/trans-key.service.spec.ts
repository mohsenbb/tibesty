import { TestBed } from '@angular/core/testing';

import { TransKeyService } from './trans-key.service';

describe('TransKeyService', () => {
  let service: TransKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
