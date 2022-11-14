import { Module } from '@nestjs/common';
import { InsTransAviService } from './ins-trans-avi.service';
import { InsTransAviController } from './ins-trans-avi.controller';

@Module({
  controllers: [InsTransAviController],
  providers: [InsTransAviService],
})
export class InsTransAviModule {}
