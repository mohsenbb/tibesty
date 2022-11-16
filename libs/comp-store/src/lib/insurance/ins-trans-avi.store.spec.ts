import { TestBed } from '@angular/core/testing';
import { InsTransAviService } from "@tibesty/data-api";

describe('InsTransAviService', () => {
  let service: InsTransAviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsTransAviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
