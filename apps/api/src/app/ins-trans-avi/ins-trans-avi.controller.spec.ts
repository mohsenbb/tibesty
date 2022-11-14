import { Test, TestingModule } from '@nestjs/testing';
import { InsTransAviController } from './ins-trans-avi.controller';
import { InsTransAviService } from './ins-trans-avi.service';

describe('InsTransAviController', () => {
  let controller: InsTransAviController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsTransAviController],
      providers: [InsTransAviService],
    }).compile();

    controller = module.get<InsTransAviController>(InsTransAviController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
