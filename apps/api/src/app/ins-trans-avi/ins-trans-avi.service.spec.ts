import { Test, TestingModule } from '@nestjs/testing';
import { InsTransAviService } from './ins-trans-avi.service';

describe('InsTransAviService', () => {
  let service: InsTransAviService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsTransAviService],
    }).compile();

    service = module.get<InsTransAviService>(InsTransAviService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
